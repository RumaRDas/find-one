const db = require('../models');

module.exports = {
    async createEvent(req, res) {
        try {
            const { title, description, cost, categories, date } = req.body;
            const { user_id } = req.headers;
            const { filename } = req.file;

            const user = await db.User.findById(user_id)

            if (!user) {
                return res.status(422).json({ message: 'User Id does not exists' })
            }

            const event = await db.Event.create({
                title,
                description,
                cost:parseFloat(cost),
                categories,
                date,
                user: user_id,
                thumbnail: filename
            })
            console.log("event created successfuly")
            return res.json(event);
      
        } catch (error) {
            throw Error(`Error while Creating  new Event :  ${error}`)
        }
    },

    async delete(req, res) {
        const { eventId } = req.params;
        try{
            await db.Event.findByIdAndDelete(eventId)
            return res.send(" Event deleted successfully")
        }
        catch (error) {
            throw Error(`We do not have any Eventt with that id  :  ${error}`)
        }
    }

}