const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    date: {
        type: String,
    },
    nickName: {
        type: String,
        required: true,
    },
    postTitle: {
        type: String,
        required: true,
    },
    postDesc: {
        type: String,
        required: true,
    },
    postCharge: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true
    // },
    room: {
        type: Number,
        required: true,
    },
    wifi: {
        type: Boolean,
        required: true,
    },
    laundry: {
        type: Boolean,
        required: true,
    },
    parkinglot: {
        type: Boolean,
        required: true,
    },
    coordinates: {
        type: Number,
    },
    postImg: {
        type: Array,
        required: true,
    },

});

postsSchema.virtual('postId').get(function () {
    return this._id.toHexString();
});

postsSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Posts', postsSchema);