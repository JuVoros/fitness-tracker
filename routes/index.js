const router = require("express").Router();
const frontEndRoute = require("./frontEnd");
const apiRoute = require("./api");

router.use("/", frontEndRoute);
router.use("/api", apiRoute);

module.exports = router;
