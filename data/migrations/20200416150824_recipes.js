
exports.up = function(knex) {
  return knex.schema.createTable('recipes', t => {
      t.increments();
      t.string('recipe_name').unique().notNullable();
      t.json('ingredients').notNullable();
      t.json('instructions', []).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
