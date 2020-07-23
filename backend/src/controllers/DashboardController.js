const db = require('../models');

module.exports = {
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

}