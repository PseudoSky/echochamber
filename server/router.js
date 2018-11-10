const router = require("express").Router();
const controller = require("./controller.js");

router.route("/user").post(controller.user.post);
router.route("/user").put(controller.user.put);
router.route("/user/account").post(controller.account.post);
router.route("/user/account").get(controller.account.get);
// /account/interations
// /account/targeting
// /account/runtime

module.exports = router;
