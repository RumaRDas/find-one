const router = require("express").Router();
const DashboardController = require('../../controllers/DashboardController');
const verifyToken = require('../../config/verifyToken');


router.get('/:eventId',verifyToken, DashboardController.getEventtById)
router.get('/categories/:categories',verifyToken, DashboardController.getAllEvents)
router.get('/user/events',verifyToken, DashboardController.getCatetEventbyUseuId)
router.get('/',verifyToken, DashboardController.getAllEvents)

module.exports = router;