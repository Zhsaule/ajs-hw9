import ArrayBufferConverter from "../arraybufferconverter";
import getBuffer from "../arraybufer";

describe('ArrayBufferConverter', () => {
  let converter;
  let buffer;
  
  beforeEach(() => {
    converter = new ArrayBufferConverter();
    buffer = getBuffer();
  });
  
  test('Проверка загрузки buffer', () => {
    converter.load(buffer);
    expect(converter.buffer).toEqual(buffer);
  });
  
  test('Проверка поля на ошибку загрузки буфера', () => {
    expect(() => {
      converter.toString();
    }).toThrow('Buffer is not loaded');
  });
  
  test('Проверка загрузки буфера в стринг', () => {
    converter.load(buffer);
    const jsonString = converter.toString();
    expect(typeof jsonString).toBe('string');
  });
  
  test('Проверка парсинга буфера в JSON object', () => {
    converter.load(buffer);
    const jsonString = converter.toString();
    const dataObject = JSON.parse(jsonString);
    expect(dataObject).toEqual({
      data: {
        user: {
          id: 1,
          name: 'Hitman',
          level: 10
        }
      }
    });
  });
});
  