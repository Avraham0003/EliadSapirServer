const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const zorkesher_schema = new Schema({

    user_name: { 
        type: String,
        required: true,
        unique: true,
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
    }

});


module.exports = mongoose.model('zorkesher', zorkesher_schema);