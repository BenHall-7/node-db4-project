const db = require("../data/dbConfig");

function getRecipes() {
    return db("recipes")
}

function getIngredients(recipe_id) {
    return db("recipe_ingredients")
        .where({recipe_id})
        .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
        .select(
            "recipe_ingredients.id",
            "recipe_ingredients.amount",
            "ingredients.name",
        )
}

function getInstructions(recipe_id) {
    return db("recipe_steps")
        .where({recipe_id})
        .join("recipes", "recipes.id", "recipe_steps.recipe_id")
}

module.exports = {
    getRecipes,
    getIngredients,
    getInstructions
}