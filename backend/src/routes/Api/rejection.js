const router = require("express").Router();
const RejectionController = require('../../controllers/RejectionController');

router.get('/:registration_id/', RejectionController.rejection)
module.exports = router;