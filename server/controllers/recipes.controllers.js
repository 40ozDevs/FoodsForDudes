const recipesServices = require("../services/recipes.services")

module.exports = apiPrefix => {
  return {
    readRecipeById,
    createRecipe
  }
}

function readRecipeById(req, res) {
  return recipesServices.readRecipeById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}

function createRecipe(req, res) {
  return recipesServices.createRecipe(req)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      
    })
}