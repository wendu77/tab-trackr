console.log('Hello, Chinwendu Opara')

const express = require('express')
const bodyParser = require('body-parser') // allows for processing json data
const cors = require('cors')
const morgan = require('morgan') // prints out logs

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'This is from the status route!'
  })
})

app.listen(process.env.PORT || 8081)
