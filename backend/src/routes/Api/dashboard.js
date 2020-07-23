const router = require("express").Router();
const DashboardController = require('../../controllers/DashboardController');

router.get('/', DashboardController.getAllEvents)
router.get('/:eventId', DashboardController.getEventtById)
router.get('/categories/:categories', DashboardController.getCateEvents)

module.exports = router;