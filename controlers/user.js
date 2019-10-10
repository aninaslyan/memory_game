const User = require('../models/user');
const mongoose = require('mongoose');

module.exports = {
    register() {

    },

    login() {
    },

    update() {
    },

    score(id) {
        let player = new User(id);
        player.getScore();
        console.log(`some log | ${id}`);
    }
};

