const Sequelize = require("sequelize");
var sequelize = new Sequelize("gyfanbase", "katiemcculloch", "", {
  dialect: "postgres"
});
var pbkdf2 = require("pbkdf2");
// var s = pbkdf2.generateSaltSync(32);

const {
  Users,
  Accounts,
  ConfigInteractions,
  ConfigTargeting,
  ConfigRuntime
} = require("../database/models.js");

const { Pool } = require("pg");
const pool = new Pool({
  user: "katiemcculloch",
  host: "localhost",
  database: "gyfanbase",
  port: 5432
});

module.exports = {
  user: {
    post: (req, res) => {
      var user = Users.build({
        uuid: req.body.uuid,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      //   console.log(req.body);

      user
        .save()
        .then(data => {
          console.log("user data successfully posted");
          res.status(200).send("user data successfully posted");
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(401);
        });
    },
    put: (req, res) => {
      console.log(req.body);
      Users.count({
        where: { email: req.body.email, password: req.body.password }
      })
        .then(data => {
          Users.increment("logins", { where: { email: req.body.email } });
          console.log("user is verified", data);
          if (data === 1) {
            console.log("count is 1");
            res.status(200).send("true");
          } else {
            res.send("false");
          }
        })
        .catch(err => {
          console.log("user could not be verified");
        });
    }
  },
  account: {
    post: (req, res) => {
      console.log(req.body[0].email, "katie email");
      pool
        .query(`SELECT uuid FROM users WHERE email='${req.body[0].email}'`)
        .then(data => {
          console.log(data["rows"][0]["uuid"], "uuid");
          let user_uuid = data["rows"][0]["uuid"];

          var account = Accounts.build({
            account_id: user_uuid + Math.floor(Math.random() * 1000),
            platform: req.body[0].platform,
            username: req.body[0].username,
            password: req.body[0].password,
            checkpoint_method: req.body[0].checkpoint_method,
            userUuid: user_uuid
          });

          account
            .save()
            .then(data => {
              console.log("account data successfully posted");
              res.status(200).send("account data successfully posted");
            })
            .catch(err => {
              console.log(err);
              res.sendStatus(401);
            });
        });
    }
  }
};
