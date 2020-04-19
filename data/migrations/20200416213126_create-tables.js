
exports.up = function(knex) {
    return knex.schema
        .createTable("ingredients", tbl => {
            tbl.increments();
            tbl.string("name").unique();
        })
        .createTable("recipes", tbl => {
            tbl.increments();
            tbl.string("name").unique();
            tbl.string("author").nullable();
        })
        .createTable("recipe_steps", tbl => {
            tbl.increments();
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate('SET NULL')
                .onDelete('SET NULL');
            tbl.text("description");
            tbl.integer("order")
        })
        .createTable("recipe_ingredients", tbl => {
            tbl.increments();
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onUpdate('SET NULL')
                .onDelete('SET NULL');
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onUpdate('SET NULL')
                .onDelete('SET NULL');
            tbl.float("amount");
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('recipe_steps')
        .dropTableIfExists('recipes')
        .dropTableIfExists('foods')
        .dropTableIfExists('ingredients');
};
