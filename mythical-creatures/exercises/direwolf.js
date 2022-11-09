class Direwolf{
    constructor(name,location,size){
        this.name = name
        this.home = location || 'Beyond the Wall'
        this.size = size || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
    }
    protect(stark){
        if(this.home !== stark.location){
            return
        } else if(this.starksToProtect.length < 2){
            this.starksToProtect.push(stark)
            stark.safe = true
            this.huntsWhiteWalkers = false

        }
    FontFaceSetLoadEvent(stark){
        
    }
    }
 
}
module.exports = Direwolf