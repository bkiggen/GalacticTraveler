import Character from './../src/Character.js';
import NPC from './../src/NPC.js';

describe('Character', function() {

  it ('should create a character object that includes name, charClass, gender & attributes', function() {
    let character1 = new Character('camille', 'female', 'pirate');
    expect(typeof character1).toEqual("object");
  });

  it ('should create a pirate character with unique stats', function() {
    let character2 = new Character('Smock', 'female', 'pirate');
    expect(character2.charClass).toEqual("pirate");
    expect(character2.strength).toEqual(10);
    expect(character2.agility).toEqual(12);
  });

  it ('should create a cyborg character with unique stats', function() {
    let character3 = new Character('Frock', 'female', 'cyborg');
    expect(character3.charClass).toEqual("cyborg");
    expect(character3.strength).toEqual(12);
    expect(character3.agility).toEqual(10);
  });

  it ('should create a non-existent character type and return a console log', function() {
    let character4 = new Character('Frock', 'female', 'fake');
    expect(character4.charClass).toEqual("fake");
  });
});


describe('NPC', function() {

  it ('should create an NPC object', function() {
    let monster1 = new NPC(3, 5, 6, 2);
    expect(typeof monster1).toEqual("object");
  });

  it ('should create an NPC object that includes hp, xp, strength, and agility', function() {
    let monster1 = new NPC(3, 5, 6, 2);
    expect(monster1.hp).toEqual(3);
    expect(monster1.xpValue).toEqual(5);
    expect(monster1.strength).toEqual(6);
    expect(monster1.agility).toEqual(2);
  });



});
