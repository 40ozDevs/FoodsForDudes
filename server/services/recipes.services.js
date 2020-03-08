const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
  readRecipeById,
  createRecipe
}

function readRecipeById(id) {
  return conn.db().collection("recipes").findOne({_id: ObjectId(id)})
    .then(recipe => {
      recipe._id = recipe._id.toString()
      return recipe
    })
    .catch(err => {
      console.warn(err)
      return Promise.reject(err)
    })
}

function createRecipe(data) {
  // string, string, array of objects, array of strings
  // array of objects = ingredient name, amount, unit of measurement
  const recipe = {
    name: data.name,
    website: data.website,
    ingredients: data.ingredients,
    instructions: data.instructions,
  }

  return conn.db().collection("recipes").insertOne(recipe)
    .then(recipe => recipe.insertedId.toString())
    .catch(err => {
      console.warn(err)
      return Promise.reject(err)
    })
}