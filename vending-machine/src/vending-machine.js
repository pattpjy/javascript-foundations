class VendingMachine {
    constructor(vendObj){
        this.id = vendObj.id
        this.isBroken = vendObj.isBroken
        this.snacks = []
    }
    addSnacks(snack){
        if(this.snacks.length === 0){
            this.snacks.push(snack)
            } 
            for ( var i = 0; i <this.snacks.length; i++){ 
            if(this.snacks[i].name === snack.name) {
            return `Sorry, that snack is already stocked! Try adding a different snack.`
            }
            this.snacks.push(snack)
        }
    }
    purchaseSnack(){
        
    }
}
module.exports = VendingMachine;
