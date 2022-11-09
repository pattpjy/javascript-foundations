class Minion {
    constructor(name){
    this.name = name
    this.character = {height:'tall',build:'Chubby', hair:'tall buzz-cut', eyes: 'One',color: 'Yellow'}
    this.status = 'silly'
    }
    
    talk(){
        return 'Hello, papagena'
    }
}

module.exports = Minion;
