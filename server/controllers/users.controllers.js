const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const usersService = require("../services/users.services")

module.exports = apiPrefix => {
    return {
        readAllUsers,
        readUserById,
        createUser,
        updateUser,
        deactivateUser,
        hardDeleteUser,
        validate
    }
}

function readAllUsers(req, res) {
    usersService.readAllUsers()
        .then(users => {
            console.log(users)
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function readUserById(req, res) {
    usersService.readUserById(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function createUser(req, res) {
    console.log('test')
    let oldPass = req.body.password

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    console.log('test')
        // Store hash in your password DB.
        bcrypt.compare(oldPass, hash, function (err, result) {
    console.log('test')
            if (result) {
                req.body.password = hash
                usersService.createUser(req.body)
                    .then(response => {
                        res.status(201).send(response)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).send(err)
                    })
            } else {
                console.warn("Password Hash doesn't match!!!")
                res.status(500).send("Password Hash doesn't match!!!")
            }
        });
    });
}

function updateUser(req, res) {
    usersService.updateUser(req.body, req.params.id)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function deactivateUser(req, res) {
    usersService.deactivateUser(req.params.id)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function hardDeleteUser(req, res) {
    usersService.hardDeleteUser(req.params.id)
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

function validate(req, res) {
    console.log(req.body)
}