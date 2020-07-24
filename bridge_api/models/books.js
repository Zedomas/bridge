let mongoose = require('mongoose')



let bookSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    publishedDate: {type: String},
    image: {type: String},
    rating: {type: String},
    preview: {type: String},
})



let Books= mongoose.model('Books', bookSchema)
module.exports = Books