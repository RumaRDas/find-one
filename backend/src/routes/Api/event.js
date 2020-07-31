const router = require("express").Router();
const multer = require('multer');
const EventsController = require("../../controllers/EventsController");
const verifyToken = require('../../config/verifyToken')

//Uploading file
const uploadConfig = require('../../config/upload');
const upload = multer(uploadConfig);

router.post('/', verifyToken, upload.single('thumbnail'), EventsController.createEvent)
router.delete('/:eventId', verifyToken, EventsController.delete)
router.put('/update/:eventId', verifyToken, EventsController.upDateEvente)

module.exports = router;