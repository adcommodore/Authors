const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "You must enter an author's name."],
        minLength: [ 3, "Each author's name must be at least 3 characters long."]
    }
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author