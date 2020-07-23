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
            throw Error(`Error while Creating  new Event :  ${error}`)
        }
    },
    async getEventtById(req, res) {
        const { eventId } = req.params;
        try{

            const event = await  db.Event.findById(eventId)
            if(event){
                return res.json(event)
            }

        }catch(error){
            return res.status(400).json({ message: 'Event  does not exist!' })

        }

    },

    getAllEvents: function (req, res) {
     db.Event.find(req.query)
            .then(event => res.json(event))
            .catch(err => res.status(422).json('There is no Event'));
    },

    async getCatetEventbyUseuId(req, res) {
        const { user_id } = req.headers;
        try {
            const events = await db.Event.find({user: user_id})
            if (events) {
                return res.json(events)
            }   
        } catch (error) {
           return res.status(422).json({message:'There is no Event you created!'})
        }
    },

    async getCateEvents(req, res) {
        const { categories } = req.params;
        const query = categories ? { categories } : {}
        try {
            const events = await db.Event.find(query)
            if (events) {
                return res.json(events)
            }

        } catch (error) {
            throw Error(`There is no event of this categories ! ${error}`)
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