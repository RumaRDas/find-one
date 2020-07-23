const router = require("express").Router();
const UserController = require("../../controllers/UserController")

router.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

router.post('/', UserController.store)

module.exports = router;