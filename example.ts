import { isTempMail } from ".";

console.log(isTempMail("spam@host1s.com"));
// true
console.log(isTempMail("good@valid-email.de"));
// false