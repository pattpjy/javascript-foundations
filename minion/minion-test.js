var assert = require('chai').assert;
var Minion = require('./minion.js');

describe('Minion',function(){
    it('Should have a name and characteristic',function(){
        var kevin = new Minion('Kevin', {height:'tall',build:'Chubby', hair:'tall buzz-cut', eyes: 'One'});

        assert.equal(kevin.name, 'Kevin');
        assert.equal(kevin.character.height, 'tall')
    })
    it('Should start off by being normal"silly" minion', function(){
        var carl = new Minion('Carl')
        assert.equal(carl.status, 'silly')
    })

    it('Should be able to say hi to pretty women in Miniones',function(){
        var stuart = new Minion('Stuart')
        var saySmth = stuart.talk()
        

        assert.equal(saySmth, 'Hello, papagena')
    })

    it("turn purple and become evil when inject by  PX-41 serum// turn back to normal when get antidote jello", function(){
        var bob = new Minion('Bob')
        bob.transform('PX-41 serum')
        assert.equal(bob.status, 'Evil Minion')
        assert.equal(bob.character.color, 'Purple')
        bob.transform('jello')
        assert.equal(bob.status, 'Evil Minion')
        assert.equal(bob.character.color, 'Yellow')

    });
})
 // can't do evil job when not waring blimp, hungry for banana, the icecream truck is present)
//  it("Should be able to say phase in minion, hint: there/' are 10 phrase", function(){
//     //function randomPhrase(){
//     //    Math.floor(Math.random() * 10)//
//     var phase = [
//         'Bello',
//         'Poopaye',
//         'Tank yu',
//         'Pwede na?',
//         'Para tu',
//         'Sa la ka!',
//         'Tatata bala tu',
//         'Underwear…',
//         'Me want banana',
//         'Tulaliloo ti amo'
//     ]
// })