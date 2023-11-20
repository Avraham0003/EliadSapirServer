const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const article_schema = new Schema({

    article_name: { 
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    article_description: { 
        type: String,
        required: true,
        trim: true
    },

    article_owner: { 
        type: String,
        required: true,
        trim: true
    }

});


module.exports = mongoose.model('articls', article_schema);