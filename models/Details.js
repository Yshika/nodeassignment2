const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    profilepicture: {
        type: String,
        required: true
    }
})
module.exports = Details = mongoose.model('details', DetailSchema);