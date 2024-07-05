const taskuserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// new user registration
async function registeruser(req,res){
    try {
        const user = new taskuserModel(req.body);
        await user.save();
        res.status(201).send({message: 'New user registered', user});
    } catch (error) {
        res.status(500).send(error);
    }
};


module.exports = {registeruser};