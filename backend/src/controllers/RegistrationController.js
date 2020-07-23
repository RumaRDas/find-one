const db = require('../models');
const {createUser} = require('./UserController');

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
        return res.json(registration);
    }

}