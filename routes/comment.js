const express = require('express');
const Comments = require('../models/comment');
const Posts = require('../models/post');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth-middleware');


module.exports = router;