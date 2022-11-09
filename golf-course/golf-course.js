class GolfCourse {
    constructor(name, level,open, FeatArr){
        this.name = name;
        this.difficulty = level
        this.openings = open || 25
        this.features = FeatArr
        this.currentlyPlaying = []
    }
    
    checkInGroup(group){
        if(this.currentlyPlaying.length <= this.openings) {
            for (var i = 0; i < group.length; i++ ){
                this.currentlyPlaying.unshift(group[i].name)    
            } 
            this.openings= this.openings - group.length
            console.log(this.currentlyPlaying)
            return "You\'re checked in. Have fun!"
        }
        return 'Sorry, we are currently booked! Please come back later.'
    }
    
}

module.exports = GolfCourse;
