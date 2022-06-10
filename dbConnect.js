const mongoose = require('mongoose')

const URL = 'mongodb+srv://purrogrammer:Ouvrez!73@cluster0.gdjai.mongodb.net/storefront'

mongoose.connect(URL)

let connectionObj = mongoose.connection 

connectionObj.on('connected' , () => {
    console.log('MongoDB connection success')
})

connectionOjb.on('error', ()=> {
    console.log('Mongo connection fail')
})