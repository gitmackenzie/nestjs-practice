const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/s3config.json');
const s3 = new AWS.S3();
const path = require('path'); //역할 무엇?
const multer = require('multer');
const multerS3 = require('multer-s3');

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'imagesofairbnb',
        contentType: multerS3.AUTO_CONTENT_TYPE, // image/jpeg
        acl: 'public-read-write',
        key: function (req, file, cb) {
            cb(null, `${file.originalname}`);
        },
    }),
});

module.exports = upload;