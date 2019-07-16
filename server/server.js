const express = require ('express')
const server = express()

const cors = require('cors')
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
server.use(cors(corsOptions))

const upload = require('./upload')
server.post('/upload', upload)

server.listen(8000, ()=>{
    console.log('Boom!')
})
