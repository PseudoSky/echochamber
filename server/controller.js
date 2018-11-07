const Sequelize = require("sequelize");
var sequelize = new Sequelize("gyfanbase", "katiemcculloch", "", {
  dialect: "postgres"
});
var pbkdf2 = require("pbkdf2");
// var s = pbkdf2.generateSaltSync(32);

const { Users } = require("../database/models.js");

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
      console.log(req);
    }
  }
};
