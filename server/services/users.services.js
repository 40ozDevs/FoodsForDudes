const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAllUsers,
    readUserById,
    createUser,
    updateUser,
    deactivateUser,
    hardDeleteUser
}

function readAllUsers() {
    const searchParams = {
        dateDeactivated: null,
        dateDeleted: null
    }
    // returns cursor obj. toArray iterates over it
    return conn.db().collection("users").find(searchParams).toArray()
        .then(players => {
            for (let i = 0; i < players.length; i++) {
                const player = players[i]
                player._id = players[i]._id.toString()
            }
            return players
        })
        .catch(err => {
            console.warn(err)
            return Promise.reject(err)
        })
}

function readUserById(id) {
    const searchParams = {
        _id: ObjectId(id),
        dateDeactivated: null,
        dateDeleted: null
    }

    // returns single document
    return conn.db().collection("users").findOne(searchParams)
        .then(user => {
            user._id = user._id.toString()
            return user
        })
        .catch(err => {
            console.warn(err)
            return Promise.reject(err)
        })
}

function createUser(data) {
    const entryBody = {
        email: data.email,
        username: data.username,
        password: data.password,
        recipes: data.recipes,
        dateCreated: new Date(),
        dateModified: new Date(),
        dateDeactivated: null,
        dateDeleted: null
    }
    
    // returns boolean acknowledged, ObjectId insertedId 
    return conn.db().collection("users").insertOne(entryBody)
        .then(user => user.insertedId.toString())
        .catch(err => {
            console.warn(err)
            return Promise.reject(err)
        })
}

function updateUser(data, id) {
    const updateBody = {
        $set: {
            email: data.email,
            username: data.username,
            password: data.password,
            recipes: data.recipes,
            dateModified: new Date()
        }
    }

    // returns matchedCount,modifiedCount,upsertedId,acknowledged
    return conn.db().collection("users").updateOne({_id: ObjectId(id)}, updateBody)
        .then(user => user.matchedCount)
        .catch(err => {
            console.warn(err)
            return Promise.reject(err)
        })
}

function deactivateUser(id) {
    const deactivateBody = {
        $set: {
            dateModified: new Date(),
            dateDeactivated: new Date()
        }
    }

    // returns matchedCount,modifiedCount,upsertedId,acknowledged
    return conn.db().collection("users").updateOne({_id : ObjectId(id)}, deactivateBody)
        .then(user => user.matchedCount)
        .catch(err => {
            console.warn(err)
            return Promise.reject(err)
        })
}

function hardDeleteUser(id) {
    // returns deletedCount, acknowledged
    return conn.db().collection("users").deleteOne({_id: ObjectId(id)})
        .then(response => response.deletedCount)
        .catch(err => {
            console.warn(err)
            return Promise.reject(err)
        })
}