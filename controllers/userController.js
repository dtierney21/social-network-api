const User = require('../models/User');

module.exports = {
    getAllUsers(req, res) {
        User.find({})
            .then((userData) => res.json(userData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then((userData) => res.json(userData))
            .catch((err) => res.status(400).json(err));
    },
};
