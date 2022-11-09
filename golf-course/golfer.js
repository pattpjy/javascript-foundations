const GolfCourse = require("./golf-course")

class Golfer {
    constructor(GolfObj){
        this.name = GolfObj.name
        this.handicap = GolfObj.handicap
        this.frustration = 0
        this.confidence = 0
    }
    calculateAvg(par){
        this.handicap +=par
        return `I usually shoot a ${this.handicap} on average.`
    }
    playRound(course){
        if(course.difficulty === 'hard'){
            this.frustration = 500
        }else if (course.difficulty === 'moderate'){
            this.frustration = 100 
        }
    }
    hitTheRange(){
        this.confidence +=10
    }
    marvel(course){
       return `I love the ${ course.features[0]} and ${ course.features[1]} on this course!`
    }
    whatYaShoot(par){
        if( par < 0 ){
            this.frustration = 0
            return `I AM THE GREATEST GOLFER ALIVE!`
        } else if (par === 0){
            this.frustration -= 10
            return 'Booyah!'
        } else {
            this.frustration += 20
            return 'Doh!'
        }
    }
}

module.exports = Golfer;
