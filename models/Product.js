const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product_schema = new Schema({

    product_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    product_descreption: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    product_price: {
        type: String,
        required: true,
        trim: true
    },

});


module.exports = mongoose.model('products', product_schema);