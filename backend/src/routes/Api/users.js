const router = require("express").Router();
const UserController = require("../../controllers/UserController")

router.get('/', (req, res) => {
	res.send('Hello from user.js app \n')
})

router.post('/', UserController.store)
router.get('/:userId', UserController.getUserById)

module.exports = router;