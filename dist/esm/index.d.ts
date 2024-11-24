export interface ConversionOptions {
    filename?: string;
    mimeType?: string;
}
export declare class Base64Converter {
    private checkAccess;
    private base64ToBlob;
    toBlob(base64: string, mimeType?: string): Blob;
    toBlobURL(base64: string, mimeType?: string): string;
    toFile(base64: string, options?: ConversionOptions): File;
}
