const express = require('express')
const userRegModel = require('../models/user.model')
const nodemailer = require('nodemailer')
const adminMail = require('../makeAdmin')


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


const checkAdmin = (req, res) => {
    const { email } = req.body
    console.log(email);

    userRegModel.findOne({ email })
        .then((data) => {
            if (data.is_staff) {
                return res.send({ status: true })
            }
            else {
                return res.send({ status: false })
            }
        })
        .catch((err) => {
            return res.status(500).send({ status: false, message: err.message })
        })
}


const makeAdmin = (req, res) => {
    const { email } = req.body
    userRegModel.findOneAndUpdate({ email }, { $set: { is_staff: true } }, { new: true })
    .then((data) => {
        if (data) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.GMAIL_USERNAME,
                  pass: process.env.GMAIL_PASSWORD
                }
            });
            let mailOptions = {
                from: process.env.GMAIL_USERNAME,
                to: [data.email, process.env.GMAIL_USERNAME],
                subject: 'Welcome Back Admin',
                html: adminMail.replace('[User\'s Name]', data.fullname).replace('[admin-login]', 'http://localhost:5173/admin/login')
              };
        
              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            return res.send({ status: true, message:'user is now an admin', data })
        }
    })
    .catch((err) => {
        return res.status(500).send({ status: false, message: err.message })
    })

}

module.exports = { registerUser, checkAdmin, makeAdmin }