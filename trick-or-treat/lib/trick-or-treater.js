class TrickOrTreater{
    constructor(obj,bag){
        this.dressedUpAs = obj.style
        this.bag = bag
        this.hasCandy = false
        this.countCandies = 0

    }
    putCandyInBag(thing){
        this.hasCandy = true
        this.bag.fill(thing)
        this.countCandies = this.bag.count
    }
    eat(){
        this.countCandies -= 1
        this.bag.candies.splice(0,1)
        


    }


}
module.exports = TrickOrTreater