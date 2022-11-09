const assert = require('chai').assert;
const Ogre = require('../exercises/ogre');
const Human = require('../exercises/human');

describe('Ogre', () => {
  // Oh no! It looks like there's no text in the `it` blocks! I guess you'll have to read the tests SUPER carefully to know what the test is expecting!

  it('Should create class  Ogre with name object', function() {
    const ogre = new Ogre({name:'Brak'});
    assert.equal(ogre.name, 'Brak');
  });

  it('Should have a home', function() {
    const ogre = new Ogre({name: 'Brak'});
    assert.equal(ogre.home, 'Swamp');
  });

  it('Should be able to have a different home', function() {
    const ogre = new Ogre({name: 'Brak', abode: 'The Ritz'});
    assert.equal(ogre.home, 'The Ritz');
  });

  it('Should be able to create human class with name and encounterCounter set to 0 ', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.name, 'Jane');
    assert.equal(human.encounterCounter, 0)

    ogre.encounter(human);
    assert.equal(human.encounterCounter, 1);
  });

  it('Human notice ogre when encounter twice', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);//1
    ogre.encounter(human);//2
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);//3
    
    assert.equal(human.noticesOgre(), true);
  });

  it('Not notice Ogre when encounter 0,2,5 times', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it('Should have swing count when swing at human', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(ogre.swings, 0)
    ogre.swingAt(human);

    assert.equal(ogre.swings, 1);
  });

  it('Swing when human noticed and add 1 swing count', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human); 
  
    assert.equal(ogre.swings, 0);

    ogre.encounter(human); 

    ogre.encounter(human); 

    assert.equal(human.noticesOgre(), true);
    assert.equal(ogre.swings, 1);
  });

  it('Should knocked out human ', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    assert.equal(human.knockedOut, false)
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.encounterCounter, 6);
    assert.equal(ogre.swings, 2);
    assert.equal(human.knockedOut, true);
  });

  it('Should knocked out a human after...', function() {
    const ogre = new Ogre({name: 'Brak'});
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.knockedOut, true);

    ogre.apologize(human);
    assert.equal(human.knockedOut, false);
  });
});
