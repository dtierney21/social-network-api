const { Schema, Types } = require('mongoose');
// Import moment to format the createdAt date
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('M/D/YYYY, h:mm:ss a'),
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionSchema;
