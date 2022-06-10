const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('w00t!'))
app.listen(port, () => console.log(`app is spinning on ${port}!`))