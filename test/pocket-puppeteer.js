const puppeteer = require('puppeteer');
const buildIt = require('../regex.js')

const testUrls = (async() => {
  const urlsToTest = buildIt()
  const validUrls = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let i = 0; i < urlsToTest.length; i++) {
    const stat = await page.goto(urlsToTest[i].resolvedUrl, {
      'waitUntil': 'networkidle2'
    })
    console.log(stat.status(), urlsToTest[i])
    stat.status() === 200 ? validUrls.push(urlsToTest[i]) : ''
  }
  await browser.close();

})
testUrls()