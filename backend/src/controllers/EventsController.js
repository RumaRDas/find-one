const db = require('../models');

module.exports = {
    async createEvent(req, res) {
        try {
            const { title, description, cost, categories } = req.body;
            const { userId } = req.headers;
            const { filename } = req.file;

            const user = await db.User.findById(userId)

            if (!user) {
                return res.status(422).json({ message: 'User Id does not exists' })
            }

            const event = await db.Event.create({
                title,
                description,
                cost,
                categories,
                user: userId,
                thumbnail: filename
            })
            return res.json(event);
        } catch (error) {
            throw Error(`Error while Creating  new Gradient :  ${error}`)
        }
    }
}