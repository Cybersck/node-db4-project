const db = require('./dbconfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipes').where({id}).first().select('recipes.ingredients');
}

function getInstructions(id) {
    return db('recipes').where({id}).first().select('recipes.instructions');
}