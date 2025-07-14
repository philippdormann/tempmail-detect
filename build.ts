import fs from "fs";

const urls = [
  "https://raw.githubusercontent.com/disposable-email-domains/disposable-email-domains/refs/heads/main/disposable_email_blocklist.conf",
  "https://gist.githubusercontent.com/steffensbola/e159bded37c4352d426927f9d5eef99f/raw/eb8ef785ce6f136467eaf37034ae31e6cf599944/temp-email-blocklist.txt",
  "https://gist.githubusercontent.com/bitbybit/3eea6c4bae7a2b606cf3/raw/8080fe07e494197c195074ea1831ad2167ad9337/temp-email.txt",
  "https://gist.githubusercontent.com/kero3009destiny/5b22c98d6a5688ddc9891dd894540af0/raw/1d2a9ec781ccc204f5f59ba1cb87064ab6a78647/gistfile1.txt",
  "https://raw.githubusercontent.com/disposable/disposable-email-domains/master/domains.txt",
  // "https://gist.githubusercontent.com/ammarshah/f5c2624d767f91a7cbdc4e54db8dd0bf/raw/660fd949eba09c0b86574d9d3aa0f2137161fc7c/all_email_provider_domains.txt",
  "https://raw.githubusercontent.com/sajjadh47/disposable-email-domains-list/refs/heads/main/domains.txt"
]

const domainsTXT = await Promise.all(urls.map(async (url) => {
  const response = await fetch(url);
  return await response.text();
}));
// flat array
const domains = domainsTXT.map((domain) => domain.split("\n")).flat()
// delete duplicates
const uniqueDomains = Array.from(new Set(domains));
console.log(uniqueDomains);
// write to file
fs.writeFileSync("domains.txt", domains.join("\n"));
//
const contentJS = fs.readFileSync("./hostnames.template.ts", { encoding: "utf8" }).replace(`[]`, JSON.stringify(uniqueDomains))
fs.writeFileSync("./src/hostnames.ts", contentJS);