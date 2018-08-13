const puppeteer = require('puppeteer');
const buildIt = require('../regex.js');
var fs = require('fs');

const testUrls = (async() => {
  const urlsToTest = buildIt()
  const validUrls = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let i = 0; i < urlsToTest.length; i++) {
    const stat = await page.goto(urlsToTest[i].resolvedUrl, {
      'waitUntil': 'load'
    })
    console.log(stat.status());
    (stat.status() === 200 && validUrls.indexOf(urlsToTest[i] > -1)) ? validUrls.push(urlsToTest[i]) : '';
    console.log(stat.status(), validUrls.length, validUrls.indexOf(urlsToTest[i]));
  }
  console.log(123, validUrls)
  await page.close()
  await browser.close();
});
// })
testUrls()