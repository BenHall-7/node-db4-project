
exports.seed = function(knex) {
  return knex('foods').insert([
    { name: 'Apple Pie' },
    { name: 'Apples and Peanut Butter' },
  ]);
};
