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
                    res.status(404).json({ message: 'No user with that ID' });
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
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(404).json(err));
    },

    addFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { runValidators: true, new: true }
        )
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(404).json(err));
    },

    deleteFriend({ params }, res) {
        User.findByIdAndDelete({ _id: params.id })
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(userData);
            })
            .catch((err) => res.status(404).json(err));
    },
};
