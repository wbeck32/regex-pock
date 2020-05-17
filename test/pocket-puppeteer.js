const puppeteer = require("puppeteer");
const buildIt = require("../regex.js");
const fs = require("fs"),

    testUrls = async () => {

        const urlsToTest = buildIt(),
            validUrls = [],
            browser = await puppeteer.launch(),
            page = await browser.newPage();

        for (let i = 0; i < urlsToTest.length; i++) {

            const stat = await page.goto(
                urlsToTest[i].resolvedUrl,
                {
                    "waitUntil": "load"
                }
            );

            console.log(stat.status());
            stat.status() === 200 && validUrls.indexOf(urlsToTest[i] > -1) ? validUrls.push(urlsToTest[i]) : "";
            console.log(
                stat.status(),
                validUrls.length,
                validUrls.indexOf(urlsToTest[i])
            );

        }
        console.log(
            123,
            validUrls
        );
        await page.close();
        await browser.close();

    };
// })

testUrls();
