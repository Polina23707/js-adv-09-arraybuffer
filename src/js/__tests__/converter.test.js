import { ArrayBufferConverter } from "../arrayBufferConverter";

test('return string', () => {
  const converter = new ArrayBufferConverter();
  const string = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  const result = converter.toString()
  expect(result).toEqual(string);
});
