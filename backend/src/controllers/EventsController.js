const db = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {
    //For Creating new events
    createEvent(req, res) {
        jwt.verify(req.token, 'secret', async (err, authData) => {
            if (err) {
                res.sendStatusCode(403)
            } else {
                const { title, description, cost, categories, date } = req.body;
                const { filename } = req.file;
                const user = await db.User.findById(authData.user._id)
                if (!user) {
                    return res.status(422).json({ message: 'User Id does not exists' })
                }
                try {
                    const event = await db.Event.create({
                        title,
                        description,
                        cost: parseFloat(cost),
                        categories,
                        date,
                        user: authData.user._id,
                        thumbnail: filename
                    })
                    console.log("event created successfuly")
                    return res.json(event);
                } catch (error) {
                    throw Error(`Error while Creating  new Event :  ${error}`)
                }
            }
        })
    },

    delete(req, res) {
        jwt.verify(req.token, 'secret', async (err) => {
            if (err) {
                res.sendStatus(401)
            } else {
                const { eventId } = req.params;
                try {
                    await db.Event.findByIdAndDelete(eventId)
                    return res.status(204).send()
                }
                catch (error) {
                    throw Error(`We do not have any Eventt with that id  :  ${error}`)
                }
            }
        })
    }

}