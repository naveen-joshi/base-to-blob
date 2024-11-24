"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const npm_restrict_1 = require("npm-restrict");
function checkEmail() {
    const email = (0, npm_restrict_1.getGitEmail)();
    if (!email) {
        console.warn("No git email configured");
        return;
    }
    if ((0, npm_restrict_1.isEmailBlocked)(email)) {
        console.error("\x1b[31m%s\x1b[0m", "🚫 Installation blocked!");
        console.error("\x1b[31m%s\x1b[0m", "If you don't hire me, don't use my work");
        process.exit(1);
    }
}
checkEmail();
