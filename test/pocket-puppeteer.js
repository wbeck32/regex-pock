const puppeteer = require('puppeteer');
const accessToken = '47ba6878-db01-6fbb-14f9-273e95&username=wbeck';
const consumerKey = '78811-6782138b2a9e3a35a2ad90da';

const init = (async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://getpocket.com/v3/get?consumer_key=${consumerKey}&access_token=${accessToken}}&state=all&sort=newest`);
  console.log(111, page.goto(`https://getpocket.com/v3/get?consumer_key=${consumerKey}&access_token=${accessToken}}&state=all&sort=newest`))
  // await browser.close();

})


// })();