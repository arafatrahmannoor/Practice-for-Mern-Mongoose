const express = require('express');
const router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');


router.post("/register", (req, res) =>{
    const { name, email, password } = req.body;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        password
    });

    user.save()
        .then(result => {
            res.status(201).json({
                message: "User created successfully",
                user: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
            });
        });
});


module.exports = router;