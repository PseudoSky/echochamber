const Sequelize = require("sequelize");
var sequelize = new Sequelize("gyfanbase", "katiemcculloch", "", {
  dialect: "postgres"
});
var pbkdf2 = require("pbkdf2");
// var s = pbkdf2.generateSaltSync(32);

// const {
//   Users,
//   Accounts,
//   ConfigInteractions,
//   ConfigTargeting,
//   ConfigRuntime
// } = require("../database/models.js");

const {
  user,
  account,
  ConfigInteraction,
  ConfigTargeting,
  ConfigRuntime
} = require("../models/index.js");
// const { Account } = require("../models");
// const { ConfigInteraction } = require("../models/configinteraction.js");
// const { ConfigTargeting } = require("../models/configtargeting.js");
// const { ConfigRuntime } = require("../models/configruntime.js");

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
      var newUser = user.build({
        uuid: req.body.uuid,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      //   console.log(req.body);
      console.log(newUser);
      newUser
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
      user
        .count({
          where: { email: req.body.email, password: req.body.password }
        })
        .then(data => {
          user.increment("logins", { where: { email: req.body.email } });
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
      user_email = req.body[0].email;
      username = req.body[0].username;
      pool
        .query(`SELECT uuid FROM users WHERE email='${user_email}'`)
        .then(data => {
          let user_uuid = data["rows"][0]["uuid"];
          console.log(user_email, "katie email");
          var user_account = account.build({
            platform: req.body[0].platform,
            username: req.body[0].username,
            password: req.body[0].password,
            checkpoint_method: req.body[0].checkpoint_method,
            uuid: user_uuid,
            email: user_email
          });
          user_account
            .save()
            .then(data => {
              console.log("account data successfully posted");
              res.status(200).send("account data successfully posted");
            })
            .catch(err => {
              console.log(err, "there was an error");
              res.status(401).send("account could not be verified");
            });
        })

        .catch(err => {
          console.log("err", err);
        });
    }
  }
};
