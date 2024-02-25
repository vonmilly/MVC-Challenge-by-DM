const { Post } = require('../models');

const postData = [{
        title: 'Title 1',
        body: 'They lounged leisurely, relishing the soothing breeze and the sense of liberation it provided. No lively exploration or thrilling escapade seemed unattainable.',
// this is where url: 'http://...' went
        user_id: 1
    },
    {
        title: 'Title 2',
        body: 'He casually sat, enjoying the fresh breeze and the freedom it brought. No vivacious adventure or electrifying endeavor seemed too far-fetched.',

        user_id: 2
    },
    {
        title: 'Title 3',
        body: 'She relaxed comfortably, savoring the gentle caress of the wind and the liberating feeling it brought. No vibrant journey or exhilarating escapade appeared beyond reach.',

        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;