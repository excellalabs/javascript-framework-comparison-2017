
const express = require('express')

const router = express.Router()

const NEW_MESSAGE_MESSAGE_ID = 'message:new';

let messages = []

router.get('/', (req, res) => {
  res.subscribe(NEW_MESSAGE_MESSAGE_ID, (a,b) => {
    a = a.slice()
    a.splice(0,0,b)
    return a
  })
  res.json(messages)
})

router.post('/', (req, res) => {
  let message = req.body
  if (message && message.text) {
    let newMessage = {
      text: message.text,
      time: Date.now()
    }
    messages.splice(0, 0, newMessage)
    res.broadcast(NEW_MESSAGE_MESSAGE_ID, newMessage);
    res.json(newMessage)
  } else {
    res.status(500).send('message failed')
  }
})

module.exports = router
