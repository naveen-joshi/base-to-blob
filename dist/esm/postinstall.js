import { getGitEmail, isEmailBlocked } from "npm-restrict";
function checkEmail() {
    const email = getGitEmail();
    if (!email) {
        console.warn("No git email configured");
        return;
    }
    if (isEmailBlocked(email)) {
        console.error("\x1b[31m%s\x1b[0m", "🚫 Installation blocked!");
        console.error("\x1b[31m%s\x1b[0m", "If you don't hire me, don't use my work");
        process.exit(1);
    }
}
checkEmail();
