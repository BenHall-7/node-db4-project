
exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: "The Emperor's new apple pie", author: "Yzma", food_id: 0 },
    { name: "Pete's original apples and peanut butter", author: "Pete", food_id: 1 },
  ]);
};
