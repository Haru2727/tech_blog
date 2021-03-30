const { Post } = require('../models');

const postData = [
    {
        title: "AI secret army of ghost workers want to be seen",
        post_content: "Worker who label content and help computers understand language want their voices to be heard.",
        user_id: 3
    },
    {
        title: "It's time we talk about your upload speeds",
        post_content: "If your upload speeds are stalling your video conferences, find out why your speeds are slow and what you can do about it.",
        user_id: 1
    },
    {
        title: "How email-marketing automation can benefit your businesses",
        post_content: "The email will be automatically delivered to a person who joins your “Signups” list without a need to lift a finger.",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "The newest tech-blog has been released to the world.  Built in a CMS format and made to allow users comment and add posts",
        user_id: 5
    },
    {
        title: "Elon Musk is trying to win China back",
        post_content: "Elon Musk's Tesla has endured a rough couple of months in China. Now he's working overtime to win Beijing back.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;