const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contact_schema = new Schema({

    name: { 
        type: String,
        required: true,
        trim: true
    },

    phone: { 
        type: String,
        required: true,
        trim: true
    },

    category: { 
        type: String,
        trim: true
    },

    checked: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model('contact', contact_schema);