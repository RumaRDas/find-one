const router = require("express").Router();
const multer = require('multer');
const EventsController = require("../../controllers/EventsController");

//Uploading file
const uploadConfig = require('../../config/upload');
const upload = multer(uploadConfig);

router.post('/',upload.single('thumbnail'), EventsController.createEvent)
router.get('/:eventId', EventsController.getEventtById)
router.get('/categories/:categories', EventsController.getCateEvents)
router.get('/', EventsController.getAllEvents)


module.exports = router;