
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Risotto', ingredients: JSON.stringify(['Kosher Salt', 'Olive Oil', 'Sushi Rice', 'White Wine', 'Unsalted Butter', 'Parmesan']),
        instructions: JSON.stringify(['step 1', 'step 2', 'step 3', 'step 4'])},
        {id: 2, recipe_name: 'Miso Turnips', ingredients: JSON.stringify(['Turnips', 'White Miso', 'Unsalted Butter', 'Sugar', 'Lemon Juice', 'Black Pepper']),
        instructions: JSON.stringify(['step 1', 'step 2', 'step 3', 'step 4'])},
        {id: 3, recipe_name: 'Pasta Limone', ingredients: JSON.stringify(['Lemon', 'Spaghetti', 'Salt', 'Cream', 'Unsalted Butter', 'Parmesan']),
        instructions: JSON.stringify(['step 1', 'step 2', 'step 3', 'step 4'])}
      ]);
    });
};
