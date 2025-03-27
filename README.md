![Node.js Package Downloads](https://img.shields.io/npm/dm/tempmail-detect)
![npm version](https://img.shields.io/npm/v/tempmail-detect)

# tempmail-detect
node module to detect temporary email addresses known for spam

## Installation
```sh
pnpm i tempmail-detect
```

## Usage
```js
import { isTempMail } from "tempmail-detect";

console.log(isTempMail("spam@host1s.com"));
// true
console.log(isTempMail("good@email.com"));
// false
```

## Project Goals
Simple to use, 0 runtime dependency check for temporary mail addresses

## About
Find a list of the temp mail domains in [./domains.txt](./domains.txt)

## Add new mail providers
Just extend the mail domain list in [./domains.txt](./domains.txt)

## Building
```
node build.js
```
