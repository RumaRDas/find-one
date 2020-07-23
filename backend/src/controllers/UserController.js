const db = require('../models')
const bcrypt = require('bcrypt');

module.exports = {
	async store(req, res) {
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
				return res.json(user);
			}

			return res.status(400).json({
				message: "email/user already exist! do you want to login?"
			})


		} catch (error) {
			throw Error(`Error while Registering new user :  ${error}`)
		}
	},
}