import Character from '../js/Character';

const character = new Character('Tanya', 100, 2);


test('Character constructor test', () => {

  const result = {
    name: 'Tanya',
    _attack: 100,
    distance: 2,
    _stoned: false,
  };

  expect(result).toEqual(character);
});


test('Character attack getter test', () => {
	character.stoned = true;
	
	expect(character.attack).toBe(85);
})