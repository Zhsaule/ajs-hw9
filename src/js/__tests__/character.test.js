import Character from "../character";

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character();
  });

  test.each([
    [1,100,100],
    [2,100,90],
    [3,100,80],
    [4,100,70],
    [5,100,60],
  ])(
    ('Проверка на силу урона от растояния'), (distance, attack, expected) => {
    character.distance = distance;
    character.attack = attack;
    expect(character.attack).toBe(expected);
  });

  test.each([
    [1,100,100],
    [2,100,85],
    [3,100,72],
    [4,100,60],
    [5,100,48],
  ])(
    ('Проверка на силу урона от растояния с дурманом'), (distance, attack, expected) => {
    character.stoned = true;
    character.distance = distance;
    character.attack = attack;
    expect(character.attack).toBe(expected);
  });
});
