const express = require('express');
const Posts = require('../models/post');
const Comments = require('../models/comment');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

module.exports = router;