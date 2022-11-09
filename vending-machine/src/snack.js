class Snack {
    constructor(name,cost){
        this.name = name;
        this.price = cost;
        this.itemsInStock = 0
    }
    stockItems(unit){
        this.itemsInStock += unit
    }
    removeItem(){
        if(this.itemsInStock === 0){
            return `Sorry, no ${this.name} left in stock!`
        }
        this.itemsInStock -= 1
        return `Item taken! There are now ${this.itemsInStock} items left.`
    }
}

module.exports = Snack;
