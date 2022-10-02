const User = require('../models/User');

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => {
                res.status(500).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then((user) => (!user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)))
            .catch((err) => res.status(500).json(err));
    },

    createUser({ body }, res) {
        User.create(body)
            .then((user) => res.json(user))
            .catch((err) => res.status(400).json(err));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(user);
            })
            .catch((err) => res.status(400));
    },

    deleteUser({ params }, res) {
        User.findByIdAndDelete({ _id: params.id })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(user);
            })
            .catch((err) => res.status(404).json(err));
    },

    addFriend({ params }, res) {
        User.findByIdAndUpdate(
            { _id: params.id },
            { $push: { friends: params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(user);
            })
            .catch((err) => res.status(404).json(err));
    },

    deleteFriend({ params }, res) {
        User.findByIdAndDelete({ _id: params.id })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(user);
            })
            .catch((err) => res.status(404).json(err));
    },
};
