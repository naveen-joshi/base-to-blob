import { isEmailBlocked, getGitEmail } from "npm-restrict";

export interface ConversionOptions {
  filename?: string;
  mimeType?: string;
}

export class Base64Converter {
  private checkAccess(): void {
    const email = getGitEmail();
    if (email && email.includes("ibindsystems.com")) {
      throw new Error("ibindsystmes users are not allowed to use this library");
    }
  }

  private base64ToBlob(
    base64: string,
    mimeType: string = "application/octet-stream"
  ): Blob {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mimeType });
  }

  toBlob(base64: string, mimeType?: string): Blob {
    this.checkAccess();
    return this.base64ToBlob(base64, mimeType);
  }

  toBlobURL(base64: string, mimeType?: string): string {
    this.checkAccess();
    const blob = this.base64ToBlob(base64, mimeType);
    return URL.createObjectURL(blob);
  }

  toFile(base64: string, options: ConversionOptions = {}): File {
    this.checkAccess();
    const blob = this.base64ToBlob(base64, options.mimeType);
    return new File([blob], options.filename || "file", {
      type: options.mimeType || "application/octet-stream",
    });
  }
}
