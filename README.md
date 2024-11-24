# Base64 to Blob Converter

A TypeScript library to convert base64 strings to Blob URLs or File objects.

## Installation

```bash
npm install base64-blob-converter
```

## Usage

```typescript
// ESM
import { Base64Converter } from 'base64-blob-converter';

// CommonJS
const { Base64Converter } = require('base64-blob-converter');

const converter = new Base64Converter();

// Convert to Blob
const blob = converter.toBlob(base64String, 'image/png');

// Convert to Blob URL
const url = converter.toBlobURL(base64String, 'image/png');

// Convert to File
const file = converter.toFile(base64String, {
  filename: 'image.png',
  mimeType: 'image/png'
});
```

## API

### `toBlob(base64: string, mimeType?: string): Blob`
Converts base64 string to a Blob object.

### `toBlobURL(base64: string, mimeType?: string): string`
Converts base64 string to a Blob URL.

### `toFile(base64: string, options?: ConversionOptions): File`
Converts base64 string to a File object.

### ConversionOptions
```typescript
interface ConversionOptions {
  filename?: string;
  mimeType?: string;
}
```

## Restrictions
This library is not available for Gmail users.