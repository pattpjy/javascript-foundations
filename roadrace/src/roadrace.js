const { Runner } = require("mocha")

class Roadrace {
    constructor(obj){
        this.name = obj.title
        this.location = obj.city
        this.distance = 0
        this.participants = []
    }
    setDistance(dist){
        this.distance = dist
        return `The ${this.name} in ${this.location} is a ${dist} mile race.`
    }
    registerParticipants(runnerObj){
        this.participants.push(runnerObj)
    }
    completeRace(){
        for (var i = 0; i < this.participants.length; i++){
            this.participants[i].completedRaces.push(this.name)
            this.participants[i].milesRun += this.distance
        }
       
        
    }

}

module.exports = Roadrace;
