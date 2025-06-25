import { hostnames } from "./hostnames";
export { hostnames }

/**
 * This checks an email address to know if it is a temporary/ spam email address
 * @param email is the email address to check
 * @returns true if it is a temporary email address, else false
 */
export function isTempMail(mail: string) {
    return hostnames.some(m => mail.endsWith(`@${m}`))
}