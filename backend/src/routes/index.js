const path = require("path");
const  router  = require("express").Router();
const userRoutes = require("./Api/users");

router.use("/api/users", userRoutes);

module.exports = router;
