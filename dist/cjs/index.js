"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64Converter = void 0;
const npm_restrict_1 = require("npm-restrict");
class Base64Converter {
    checkAccess() {
        const email = (0, npm_restrict_1.getGitEmail)();
        if (email && email.includes("gmail.com")) {
            throw new Error("Gmail users are not allowed to use this library");
        }
    }
    base64ToBlob(base64, mimeType = "application/octet-stream") {
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
    toBlob(base64, mimeType) {
        this.checkAccess();
        return this.base64ToBlob(base64, mimeType);
    }
    toBlobURL(base64, mimeType) {
        this.checkAccess();
        const blob = this.base64ToBlob(base64, mimeType);
        return URL.createObjectURL(blob);
    }
    toFile(base64, options = {}) {
        this.checkAccess();
        const blob = this.base64ToBlob(base64, options.mimeType);
        return new File([blob], options.filename || "file", {
            type: options.mimeType || "application/octet-stream",
        });
    }
}
exports.Base64Converter = Base64Converter;
