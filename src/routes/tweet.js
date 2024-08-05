const express = require('express');
const { createTweet, getUserTimeline } = require('../controllers/tweet');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createTweet);
router.get('/:userId/timeline', getUserTimeline);

module.exports = router;
