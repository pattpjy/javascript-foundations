class Bag{
    constructor(){
        this.empty = true
        this.count = 0
        this.candies = []
    }
    fill(things){
        this.candies.push(things)
        this.count = this.candies.length
    }
    contains(things){
       if(this.candies[0].type === things){
        return true
       }
       return false
    }
}
module.exports = Bag