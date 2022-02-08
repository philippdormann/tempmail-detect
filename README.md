[![Node.js Package](https://github.com/philippdormann/tempmail-detect/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/philippdormann/tempmail-detect/actions/workflows/npm-publish.yml)
![Node.js Package Downloads](https://img.shields.io/npm/dm/tempmail-detect)
![npm version](https://img.shields.io/npm/v/tempmail-detect)

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

## Project Goals
Simple to use, 0 runtime dependency check for temporary mail addresses

## About
Find a list of the used temp mail services in [./services.txt](./services.txt)

Find a list of the used temp mail domains in [./domains.txt](./domains.txt)

## Add new mail providers
Just extend the mail domain list in [./domains.txt](./domains.txt)

## Building
```
yarn
yarn build
```