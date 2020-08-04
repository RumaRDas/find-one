const db = require('../models');

module.exports = {
    async rejection(req, res) {
        try {
            const { registration_id } = req.params;
            const registration = await db.Registration.findById(registration_id);
            registration.approve = false;
            await registration.save();
            return res.json(registration)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}