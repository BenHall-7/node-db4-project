const db = require("../data/dbConfig");

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    db("recipe_ingredients")
        .join("recipes", "recipes.id", "recipe_ingredients.id")
        .join("ingredients", "ingredients.id", "ingredients_id")
}

function getInstructions(recipe_id) {
    db("recipe_steps")
        .join("recipes", "recipes.id", "recipe_steps.recipe_id")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}