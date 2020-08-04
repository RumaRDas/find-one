const db = require('../models');
const jwt = require('jsonwebtoken');

module.exports = {

    getEventById(req, res) {
        jwt.verify(req.token, 'secret', async (err, authData) => {
            if (err) {
                res.sendStatus(401)
            } else {
                const { eventId } = req.params.eventId;
                try {
                    const events = await db.Event.findById(eventId)
                    if (events) {
                        return res.json({ authData: authData, events: events })
                    }
                } catch (error) {
                    return res.status(400).json({ message: 'Event  does not exist!' })
                }
            }
        })
    },

    getAllEvents(req, res) {
        jwt.verify(req.token, 'secret', async (err, authData) => {
            if (err) {
                res.sendStatus(401)

            } else {
                // console.log("Tokeneeee:", req.token)
                const { categories } = req.params;
                const query = categories ? { categories } : {}
                try {
                    const events = await db.Event.find(query)
                        .sort({ date: -1 })
                    if (events) {
                        return res.json({ authData, events })
                    }
                } catch (error) {
                    throw Error(`There is no event of this categories ! ${error}`)
                }
            }
        })
    },

    getCatetEventbyUseuId(req, res) {
        jwt.verify(req.token, 'secret', async (err, authData) => {
            if (err) {
                res.sendStatus(401)
            } else {
                const { user_id } = req.headers;
                try {
                    const events = await db.Event.find({ user: authData.user._id })
                    if (events) {
                        return res.json({ authData, events })
                    }
                } catch (error) {
                    return res.status(422).json({ message: 'There is no Event you created!' })
                }
            }
        })
    },

}