
exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: "The Emperor's new apple pie", author: "Yzma"},
    { name: "Pete's original apples and peanut butter", author: "Pete"},
  ]);
};
