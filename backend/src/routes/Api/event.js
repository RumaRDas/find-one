const router = require("express").Router();
const multer = require('multer');
const EventsController = require("../../controllers/EventsController");

//Uploading file
const uploadConfig = require('../../config/upload');
const upload = multer(uploadConfig);

router.get('/', (req, res) => {
	res.send('Hello from event api app \n')
})

router.post('/',upload.single('thumbnail'), EventsController.createEvent)
router.get('/:eventId', EventsController.getEventById)


module.exports = router;