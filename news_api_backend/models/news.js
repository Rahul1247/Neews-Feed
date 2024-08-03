const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: String,        // Title of the news article
    description: String,  // Description of the news article
    url: String,          // URL to the full news article
    publishedAt: Date,    // Date when the article was published
});

module.exports = mongoose.model('News', NewsSchema);
