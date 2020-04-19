
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: "Pie Crust" },
    { name: "Apples" },
    { name: "Butter" },
    { name: "Sugar" },
    { name: "Peanut Butter" },
  ]);
};
