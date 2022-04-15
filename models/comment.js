const mongoose = require('mongoose');

const commentsSchema = mongoose.Schema({
    postId: {
        type: String,
        required: true,
    },
    nickName: {
        type: String,
        required: true,
    },
    contents: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

commentsSchema.virtual('commentId').get(function () {
    return this._id.toHexString();
});

commentsSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Comments', commentsSchema);