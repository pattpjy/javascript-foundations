class Ingredient {
    constructor(obj){
        this.name = obj.name 
        this.amount = obj.amount 
    }
    changeAmount(amount){
    this.amount = amount
    }
}

module.exports = Ingredient;
