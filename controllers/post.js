const Post = require('../models/post');

module.exports = {
    create,
    delete:deleteOne
};

function create(req, res) {
    Post.create(req.body)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Post.findByIdAndDelete(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}