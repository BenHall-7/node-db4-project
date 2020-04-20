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

function getSteps(recipe_id) {
    return db("recipe_steps")
        .where({recipe_id})
        .select(
            "recipe_steps.id",
            "recipe_steps.description",
            "recipe_steps.order"
        )
}

function getRecipesByIngredient(ingredient_id) {
    return db("recipe_ingredients")
        .where({ingredient_id})
        .join("recipes", "recipes.id", "recipe_ingredients.recipe_id")
        .select("recipes.*")
}

module.exports = {
    getRecipes,
    getIngredients,
    getSteps,
    getRecipesByIngredient
}