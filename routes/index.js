const router = require('express').Router();
const apiRoute = require("./api");
const frontRoute = require("./frontRoute")

router.use("/",frontRoute);
router.use("/api", apiRoute);

module.exports = router