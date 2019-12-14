const router = require("express").Router()

const usersControllersFactory = require("../controllers/users.controllers")

module.exports = apiPrefix => {
    const usersController = usersControllersFactory(apiPrefix)

    router.get("/", usersController.readAllUsers)
    router.get("/:id([0-9a-fA-F]{24})", usersController.readUserById)
    router.post("/", usersController.createUser)
    router.put("/:id([0-9a-fA-F]{24})", usersController.updateUser)
    router.put("/:id([0-9a-fA-F]{24})/delete", usersController.deactivateUser)
    router.delete("/:id([0-9a-fA-F]{24})", usersController.hardDeleteUser)

    return router
}