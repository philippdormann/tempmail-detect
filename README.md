# tempmail-detect
node module to detect temporary email addresses known for spam

## Installation
```sh
yarn add tempmail-detect
```

## Usage
```js
import { isTempMail } from "tempmail-detect";

console.log(isTempMail("spam@host1s.com"));
// true
console.log(isTempMail("good@email.com"));
// false
```
