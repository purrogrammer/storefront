const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('w00t!'))
app.listen(port, () => console.log(`Yo, server spining on ${port}!`))