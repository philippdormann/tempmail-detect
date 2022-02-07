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

## About
- find a list of the used temp mail services in [./services.txt](./services.txt)