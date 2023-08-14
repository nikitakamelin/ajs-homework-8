import Character from '../js/Character';

test('Character constructor test', () => {
  const character = new Character('Tanya', 100, 2);

  const result = {
    name: 'Tanya',
    _attack: 100,
    distance: 2,
    stoned: false,
  };

  expect(result).toEqual(character);
});
