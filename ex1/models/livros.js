var mongoose = require("mongoose")

var livrosSchema = new mongoose.Schema({
    _id: String,
    genres: [String],
    characters: [String],
    awards: [String],
    ratingsByStars: [String],
    setting: [String],
    title: String,
    series: String,
    author: String,
    rating: String,
    description: String,
    language: String,
    bookFormat: String,
    edition: String,
    pages: String,
    publisher: String,
    publishDate: String,
    firstPublishDate: String,
    numRatings: String,
    likedPercent: String,
    coverImg: String,
    bbeScore: String,
    bbeVotes: String,
    price: String
}, { versionKey: false });


module.exports = mongoose.model('livros', livrosSchema)