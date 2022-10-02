const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId });
        then((thought) =>
            !user ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought)
        ).catch((err) => res.status(500).json(err));
    },

    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findByIdAndUpdate({ _id: params.userId }, { $push: { thoughts: _id } }, { new: true });
            })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'No user with that ID' });
                    return;
                }
                res.json(user);
            })
            .catch((err) => res.json(err));
    },

    updateThought({ params, body }, res) {
        Thought.findByIdAndUpdate({ _id: params.thoughtId }, body, { runValidators: true, new: true })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought with that ID' });
                    return;
                }
                res.json(thought);
            })
            .catch((err) => res.json(err));
    },

    deleteThought({ params }, res) {
        Thought.findByIdAndDelete({ _id: params.thoughtId }, { runValidators: true, new: true })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought with that ID' });
                    return;
                }
                res.json(thought);
            })
            .catch((err) => res.json(err));
    },
};
