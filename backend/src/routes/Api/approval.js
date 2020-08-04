const router = require("express").Router();
const ApprovalController = require('../../controllers/ApprovalController');

router.get('/:registration_id/', ApprovalController.approve)
module.exports = router;