"use strict"

const usersService = require("../services/users.services")

let _apiPrefix

module.exports = apiPrefix => {
    _apiPrefix = apiPrefix
    return {
        readAllUsers,
        readUserById,
        createUser,
        updateUser,
        deactivateUser,
        hardDeleteUser
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
    usersService.createUser(req.body)
        .then(response => {
            res.status(201).send(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
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