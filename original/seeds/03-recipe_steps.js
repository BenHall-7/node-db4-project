
exports.seed = function(knex) {
  return knex('recipe_steps').insert([
    { recipe_id: 1, description: "Cut the apples up", order: 0 },
    { recipe_id: 1, description: "Put the cut apples in a pie crust, but only half of them", order: 1 },
    { recipe_id: 1, description: "Whoops, forgot to mix the sugar earlier. Pour it in now", order: 2 },
    { recipe_id: 1, description: "Add some butter for good measure", order: 3 },
    { recipe_id: 1, description: "Put the pie in a box", order: 4 },
    { recipe_id: 1, description: "Put the pie in another box", order: 5 },
    { recipe_id: 1, description: "Ship it to yourself", order: 6 },
    { recipe_id: 1, description: "AND SMASH IT WITH A HAMMER", order: 7 },
    { recipe_id: 1, description: "Go ahead and eat the other half of the apples. They'll go bad otherwise", order: 8 },
    { recipe_id: 2, description: "Put the peanut butter on the apples", order: 0 },
    { recipe_id: 2, description: "enjoi da apls", order: 1 },
  ]);
};
