const path = require("path");
const  router  = require("express").Router();
const userRoutes = require("./Api/users");
const eventRoutes = require('./Api/event');
const loginRoutes = require('./Api/login');
const dashboardRoutes = require('./Api/dashboard')
const registrationRoutes = require('./Api/registration')


router.use("/api/login", loginRoutes);
router.use("/api/users", userRoutes);
router.use("/api/event", eventRoutes);
router.use("/api/dashboard", dashboardRoutes );
router.use("/api/registration", registrationRoutes );

module.exports = router;
