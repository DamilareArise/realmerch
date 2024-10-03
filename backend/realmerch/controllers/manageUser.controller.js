const express = require('express')
const userRegModel = require('../models/user.model')


const registerUser = (req, res) => {
    const { fullname, email } = req.body;
    
    userRegModel.findOne({ email }) 
    .then((existingUser) => {
        if (existingUser) {
            return res.send({ status: false, message: 'Email already exists' });
        } else {
            const newUser = new userRegModel({ fullname, email });  
            return newUser.save();
        }
    })
    .then((data) => {
        if (!res.headersSent) {  // Ensure headers are not already sent
            res.send({ status: true, data });
        }
    })
    .catch((err) => {
        if (!res.headersSent) {  // Ensure headers are not already sent
            res.status(500).send({ status: false, message: err.message });
        }
    })
};

module.exports = {registerUser}