import { isTempMail } from "./index.js";

console.log(isTempMail("spam@host1s.com"));
// true
console.log(isTempMail("good@email.com"));
// false