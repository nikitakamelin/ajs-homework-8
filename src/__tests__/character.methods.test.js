import Character from '../js/Character';

let character = new Character('Tanya', 100, 2);

test('Character setStoned() test', () => {
  character.setStoned();

  expect(character.attack).toBe(85);
});

test('Character removeStoned() test', () => {
  character = new Character('Tanya', 100, 2, true);
  character.removeStoned();

  expect(character.attack).toBe(90);
});

test('Character setDistance() test', () => {
  character.setDistance(4);

  expect(character.attack).toBe(70);
});
