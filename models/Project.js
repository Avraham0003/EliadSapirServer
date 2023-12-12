const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const project_schema = new Schema({

    project_name: { 
        type: String,
        required: true,
        unique: true
    },

    project_description: { 
        type: String,
        required: true,
        unique: true
    },

    project_photo: { 
        type: String,
        required: true,
        unique: true
    },
    youtube_url:{
        type:String,
        required: true,
        unique: true
    }

});


module.exports = mongoose.model('projects', project_schema);