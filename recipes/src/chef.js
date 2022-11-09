var Recipe = require('../src/recipe.js');

class Chef {
    constructor(name,boxArr){
        this.name = name
        this.recipeBox = boxArr
    }
    tryRecipe(dish, rate) {
        for(var i = 0; i < this.recipeBox.length; i++){
            if(this.recipeBox[i].name === dish){
                this.recipeBox[i].attempted = true
                this.recipeBox[i].rating = rate
            }
        }
    }

    addRecipe(dish,ingArr) {
        var add = {name: dish, ingredients: ingArr}
        var newRep = new Recipe(add)
        this.recipeBox.push(newRep)
    }
    changeRecipe(name,ing,num){
        for(var i = 0; i < this.recipeBox.length; i++){
            if(this.recipeBox[i].name === name){
                for(var a = 0; a < this.recipeBox[i].ingredients.length; a++){
                    if(this.recipeBox[i].ingredients[a].name === ing){
                        this.recipeBox[i].ingredients[a].amount = num 
                    }
                } 
            }
        }
    }
}

module.exports = Chef;
