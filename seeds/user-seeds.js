
const { User } = require('../models');

const userData = [{
        username: 'Gin',
        email: 'Gin@gomail.com',
        password: 'howiosjkas'
    },
    {
        username: 'kensly',
        email: 'kensly@gomail.com',
        password: 'FUbdjksa'
    },
    {
        username: 'Manny',
        email: 'manny@gomail.com',
        password: 'GHajhj'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;