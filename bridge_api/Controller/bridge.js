let express = require('express')
let bridge = express.Router()
let Bridge = require('../models/bridge.js')

bridge.get('/', (req, res) => {
    Bridge.find({}, (err, foundBridge) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(foundBridge)
    })
  })


bridge.post('/', async (req, res) => {
    Bridge.create(req.body, (error, createdBridge) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdBridge) 
    })
  })
  

  bridge.put('/:id', (req, res) => {
    Bridge.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBridge) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedBridge)
    })
  })

  bridge.delete('/:id', (req, res) => {
    Bridge.findByIdAndRemove(req.params.id, (err, deletedBridge) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedBridge)
    })
  })

// SEED ROUTE for DB //
bridge.get('/seedme', (req, res) => {
  Bridge.deleteMany(() => {
      Bridge.create([
          {
            firstName: "Zach",
            lastName: "Would",
            bio: "Very Tall",
            status: "New to This",
            img: "https://ih1.redbubble.net/image.297578530.7072/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg",
          },
          {
            firstName: "Shorty",
            lastName: "McGee",
            bio: "the short one",
            status: "I'm very new",
            img: "https://ih1.redbubble.net/image.297578530.7072/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg",
          },
          {
            firstName: "Tally",
            lastName: "Short",
            bio: "the tall one",
            status: "I'm very new",
            img: "https://ih1.redbubble.net/image.297578530.7072/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg",
          }
      ], (err) => {
        res.send(400).json({error: err.message})
      })
  })
})



module.exports = bridge