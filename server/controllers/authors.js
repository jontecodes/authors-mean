var mongoose = require('mongoose');

require('../models/author');
const Author = mongoose.model('Author');

module.exports = {
    index: (req, res) => {
        Author.find({}, (err, authors) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: authors});
            }
        })
    },
    show: (req, res) => {
        Author.findOne({_id: req.params.id},(err, author) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: author});
            }
        })
    },
    create: (req, res) => {
        Author.create(req.body, (err, results) => {
            if(err){
                res.json({message: 'Failed', errors: err.errors});
            } else {
                res.json({message: 'Success', results: results});
            }
        })
    },
    update: (req, res) => {
        Author.findByIdAndUpdate({_id: req.params.id},{$set: req.body}, {runValidators: true},  (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: result});
            }
        })
    },
    destroy: (req, res) => {
        Author.remove({_id: req.params.id}, (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: result});
            }
        })
    }
}