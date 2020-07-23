const router = require("express").Router();
const RegistrationController = require('../../controllers/RegistrationController')

router.post('/:eventId', RegistrationController.create)
router.get('/:registration_id', RegistrationController.getRegistrationById)

module.exports = router;