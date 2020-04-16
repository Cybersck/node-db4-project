const db = require('../data/recipedb');

exports.get = (req, res) => {
    db.getRecipes().then(recipes => {
       let recipes2 = recipes.map(recipes => {
           return {id: recipes.id, recipe_name: recipes.recipe_name, ingredients: JSON.parse(recipes.ingredients), instructions: JSON.parse(recipes.instructions)}
        });
        res.status(200).send(recipes2).catch(err => console.log(err));
    });
}

exports.getList = (req, res) => {
    db.getShoppingList(req.params.id).then(list => {
        let list2 = {ingredients: JSON.parse(list.ingredients)};
        res.status(200).send(list2).catch(err => console.log(err));
    })
}

exports.getInstructions = (req, res) => {
    db.getInstructions(req.params.id).then(inst => {
        let inst2 = {instructions: JSON.parse(inst.instructions)};
        res.status(200).send(inst2).catch(err => console.log(err));
    })
}