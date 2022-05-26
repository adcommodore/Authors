const Author = require('../models/author.model.js');

module.exports = {

    createAuthor: (req, res) => {
        Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) => {
            console.log('Something went wrong with createAuthor');
            res.status(400).json(err);
        }) 
    },

    findAllAuthors: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err) => {
                console.log('Find All Authors failed');
                res.json({ message: 'Something went wrong with findAll', error: err})
            })
    },

    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch((err) => {
                console.log('Find One Authors failed');
                res.json({ message: 'Something went wrong with findOne', error: err})
            })
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, {
            new: true,
            runValidators: true,
        })
            .then((updatedAuthor) => {
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err) => {
                console.log('Something went wrong with updateAuthor');
                res.status(400).json(err);
            })
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then((deletedPirate) => {
                console.log(deletedPirate);
                res.json(deletedPirate)
            })
            .catch((err) => {
                console.log('Delete One Author failed');
                res.json({message: 'Something went wrong with deleteAuthor', error: err})
            })
    }
}