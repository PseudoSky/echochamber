const router = require("express").Router();
const controller = require("./controller.js");

router.route("/user").post(controller.user.post);
router.route("/user").put(controller.user.put);

module.exports = router;
