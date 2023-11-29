const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contact_schema = new Schema({

    user_name: { 
        type: String,
        required: true,
        trim: true
    },

    user_phone: { 
        type: String,
        required: true,
        trim: true
    },

    user_reason: { 
        type: String,
        trim: true
    },

    checked: {
        type: Boolean,
        default: false
    }

});


module.exports = mongoose.model('contact', contact_schema);