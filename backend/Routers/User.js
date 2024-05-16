const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const UserModel = require('../Models/UserModel');

//password hashing
const bcrypt = require('bcrypt');

router.use(bodyParser.json());


// password hassing
router.post('/register', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    UserModel.create({...req.body, password: hashedPassword})
    .then(response => console.log(response))
    .catch(err => console.log(err))
})

router.post('/login', (req, res) => {
    UserModel.findOne({email: req.body.email})
    .then(response => {
        if(bcrypt.compareSync(req.body.password, response.password)){
            res.send('Logged in')
        }
    })
    .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then(response => res.send(response))
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
    .then(response => res.send(response))
    .catch(err => console.log(err))
})

module.exports = router;

