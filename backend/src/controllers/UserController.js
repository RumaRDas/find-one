const db = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
	async createUser(req, res) {
		try {
			const { email, firstName, lastName, password } = req.body;
			const existentUser = await db.User.findOne({ email });

			if (!existentUser) {
				const hashedPassword = await bcrypt.hash(password, 10);
				const user = await db.User.create({
					firstName,
					lastName,
					email,
					password: hashedPassword,
				});
				return res.json({
					
					_id: user._id,
					email: user.email,
					firstName: user.firstName,
					lastName: user.lastName
					
				});
			}
			return res.status(400).json({
				message: "email/user already exist! do you want to login?"
			})
		} catch (error) {
			throw Error(`Error while Registering new user :  ${error}`)
		}
	},

	async getUserById(req, res) {
		const { userId } = req.params;
		try {
			const user = await db.User.findById(userId);
			return res.json(user)
		} catch (error) {
			return res.status(422).json('User Id does not exists')
		}


	}
}