const db = require('../models');

module.exports = {
    async createEvent(req, res) {
        try {
            const { title, description, cost, categories } = req.body;
            const { user_id } = req.headers;
            const { filename } = req.file;

            const user = await db.User.findById(user_id)

            if (!user) {
                return res.status(422).json({ message: 'User Id does not exists' })
            }

            const event = await db.Event.create({
                title,
                description,
                cost,
                categories,
                user: user_id,
                thumbnail: filename
            })
            return res.json(event);
        } catch (error) {
            throw Error(`Error while Creating  new Gradient :  ${error}`)
        }
    },

    async getEventById(req, res) {
        const { eventId } = req.params;
        db.Event.findById(eventId)
            .then(event => res.json(event))
            .catch(err => res.status(422).json('Gradient Id does not exists'));
    }

}