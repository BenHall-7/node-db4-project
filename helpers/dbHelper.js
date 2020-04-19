const db = require("../data/dbConfig");

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {

}

function getInstructions(recipe_id)