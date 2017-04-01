
// Import dependencies 
const path = require('path')
const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const stockings = require('express-stockings')

const tryOpen = require('./tryOpen')

// Set up express app and server instances
const app = express()
const server = http.createServer(app)

// Set up static content directories
app.use('/angular2', express.static(path.join(__dirname, '../angular2/dist')))
app.use('/react', express.static(path.join(__dirname, '../react-proj/build')))
app.use('/vue', express.static(path.join(__dirname, '../vue/dist')))
app.use(express.static(path.join(__dirname, './static')))

// Set up middleware
app.use(bodyParser.json())
app.use(stockings.middleware({
  server: server,
  privateKey: process.env.PRIVATE_KEY || 'this is not a secure private key'
}))

// Set up api
app.use('/api', require('./api'))

// Start server
let port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`server now listening on port ${port}`)
  tryOpen(port)
})
