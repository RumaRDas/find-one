const router = require("express").Router();
const RegistrationController = require('../../controllers/RegistrationController')

router.post('/:eventId', RegistrationController.create)

module.exports = router;