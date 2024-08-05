const Tweet = require('../models/Tweet');
const User = require('../models/User');

exports.createTweet = async (req, res) => {
    const { userId } = req.user;
    const { text } = req.body;
    try {
        const tweet = new Tweet({ userId, text });
        await tweet.save();
        res.status(201).json({ message: 'Tweet posted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getUserTimeline = async (req, res) => {
    const { userId } = req.params;
    const { cursor } = req.query;
    const limit = 10; // Number of tweets per page
    try {
        const query = { userId };
        if (cursor) {
            query._id = { $lt: cursor };
        }
        const tweets = await Tweet.find(query)
            .sort({ createdAt: -1 })
            .limit(limit);
        res.json(tweets);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
