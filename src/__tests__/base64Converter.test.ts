import { Base64Converter } from '../index';

describe('Base64Converter', () => {
  let converter: Base64Converter;

  beforeEach(() => {
    converter = new Base64Converter();
  });

  const sampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

  test('toBlob should return a Blob', () => {
    const blob = converter.toBlob(sampleBase64, 'image/png');
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.type).toBe('image/png');
  });

  test('toBlobURL should return a valid URL', () => {
    const url = converter.toBlobURL(sampleBase64, 'image/png');
    expect(url).toMatch(/^blob:/);
  });

  test('toFile should return a File with correct name and type', () => {
    const file = converter.toFile(sampleBase64, {
      filename: 'test.png',
      mimeType: 'image/png'
    });
    expect(file).toBeInstanceOf(File);
    expect(file.name).toBe('test.png');
    expect(file.type).toBe('image/png');
  });
});