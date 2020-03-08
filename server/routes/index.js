const express = require("express")
const router = express.Router()

const usersApiPrefix = "/api/users"
const usersRoutes = require("./users.routes")(usersApiPrefix)

const recipesApiPrefix = "/api/recipes"
const recipesRoutes = require("./recipes.routes")(recipesApiPrefix)

module.exports = router

router.use(usersApiPrefix, usersRoutes)

useAPIErrorHandling(router)

function useAPIErrorHandling(router) {
    // Handle API 404
    router.use("/api/*", (req, res, next) => {
        res.sendStatus(404)
    })
    router.use((err, req, res, next) => {
        if (!err) {
            return next()
        }
        console.log(err.stack)
        res.sendStatus(500)
    })
}