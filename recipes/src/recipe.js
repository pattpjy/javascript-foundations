class Recipe {
    constructor(recipeObj){
        this.name = recipeObj.name
        this.ingredients = recipeObj.ingredients
        this.attempted = false
        this.rating = null
    }
    rateRecipe(rate){
        this.rating = rate
        this.attempted = true
    }
    changeIngredientAmount(chg,num){
        for (var i =0; i< this.ingredients.length; i++) 
        {
           if( this.ingredients[i].name === chg){
            this.ingredients[i].amount = num
           }
        }
    }
    generateGroceryList(list) {
        var list = []
            for (var i =0; i< this.ingredients.length; i++){
                list.push(`${this.ingredients[i].amount} ${this.ingredients[i].name},`)
            }
        
        return `You need: ${list.join(' ')}`
        }
}


module.exports = Recipe;
