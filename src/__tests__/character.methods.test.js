import Character from '../js/Character';

let character = new Character('Tanya', 100, 2);

test('Character setDistance() test', () => {
  character.setDistance(4);

  expect(character.attack).toBe(70);
});
