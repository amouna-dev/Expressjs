const express = require('express')
const app = express()
const port = 3000

//use middleware
const logger = require('./middleware/logger')

app.use(logger)

app.use(express.json())

//serve the static files in public
app.use(express.static(__dirname + "/public"))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, (err) => {
    err?
    console.log(err) :
    console.log(`Server running on the port ${port}!`)  
} )

