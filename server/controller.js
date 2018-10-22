const Sequelize = require("sequelize");
var sequelize = new Sequelize("gyfanbase", "katiemcculloch", "", {
  dialect: "postgres"
});

const { Users } = require("../database/models.js");

module.exports = {
  user: {
    post: (req, res) => {
      var user = Users.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      console.log(req.body);
      user
        .save()
        .then(data => {
          console.log("user data successfully posted");
          res.status(200).send("user data successfully posted");
        })
        .catch(err => {
          console.log("error saving data");
        });
    },
    put: (req, res) => {
      console.log(req.body);
      Users.count({
        where: { email: req.body.email, password: req.body.password }
      })
        .then(data => {
          Users.increment("logins", { where: { email: req.body.email } });
          console.log("user is verified");
          if (data === 1) {
            res.status(200).send("true");
          } else {
            res.send("false");
          }
        })
        .catch(err => {
          console.log("user could not be verified");
        });
    }
  }
};
