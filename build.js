import { createReadStream, fstat, readFileSync, writeFileSync } from 'fs';
import readline from 'readline';
import stream from 'stream';
const instream = createReadStream('./domains.txt');
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);

const arr = [];

rl.on('line', function (line) {
  arr.push(line);
});

rl.on('close', function () {
  // remove possible duplicates
  const uniqueDomains = [...new Set(arr)];
  const contentJS = readFileSync("./hostnames.template.js", { encoding: "utf8" }).replace(`[/*--hostnames--*/]`, JSON.stringify(uniqueDomains))
  writeFileSync("./hostnames.js", contentJS);
});