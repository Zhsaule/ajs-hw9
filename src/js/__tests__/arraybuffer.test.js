import getBuffer from "../arraybufer";

describe('getBuffer', () => {
  test('Проверка объекта на ArrayBuffer', () => {
    const buffer = getBuffer();
    expect(buffer).toBeInstanceOf(ArrayBuffer);
  });

  test('Проверка конвертации данных в ArrayBuffer', () => {
    const expectedData = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = getBuffer();
    const bufferView = new Uint16Array(buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    expect(result).toBe(expectedData);
  });
});
