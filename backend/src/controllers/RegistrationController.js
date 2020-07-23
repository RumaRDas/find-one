const db = require('../models');

module.exports ={

    async create(req, res) {
        const { user_id } = req.headers;
        const {eventId } = req.headers;
        const { date } = req.body;

        const registration = await db.Registration.create({
            user: user_id,
            event: eventId,
            date
        })
        await registration
        .populate(`user`)
        .populate(`event`)
        .execPopulate();
        return res.json(registration);
    },
    async getRegistrationById(req, res) {
        const { registration_id } = req.params;
        try {
            const registration = await db.Registration.findById(registration_id)
            await registration
            .populate(`user`, `-password`)
            .populate(`event`)
            .execPopulate();
        return res.json(registration);

        } catch (error) {
            return res.status(400).json({ message: "Registration not found" })

        }
    }

}