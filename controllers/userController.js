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

    createUser({ body }, res) {
        User.create(body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(400).json(err));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'No matching user found' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(400));
    },

    deleteUser({ params }, res) {
        User.findByIdAndDelete({ _id: params.id })
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'No matching user found' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(404).json(err));
    },
};
