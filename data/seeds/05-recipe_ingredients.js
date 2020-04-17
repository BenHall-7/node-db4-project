
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 0, ingredient_id: 0, amount: 1 },
    { recipe_id: 0, ingredient_id: 1, amount: 20 },
    { recipe_id: 0, ingredient_id: 2, amount: 4 },
    { recipe_id: 0, ingredient_id: 3, amount: 1 },
    { recipe_id: 1, ingredient_id: 1, amount: 3 },
    { recipe_id: 1, ingredient_id: 4, amount: 2 },
  ]);
};
