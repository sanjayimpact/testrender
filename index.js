
import express from 'express';
import WebSocket from 'ws';
import puppeteer from 'puppeteer-core';
const app  = express();
const port = 3000;



  const browser = await puppeteer.connect({
    browserWSEndpoint: 'wss://brd-customer-hl_b0a0de5f-zone-scraping_browser1:zuh9bm3r1npt@brd.superproxy.io:9222',
  });

  const page = await browser.newPage();
  await page.goto('https://www.linkedin.com', { waitUntil: 'domcontentloaded' });
  console.log('✅ Page loaded:', await page.title());

  await browser.close();


app.listen(port,(err)=>{
    if(err)throw err;
    console.log("hey bro is connected with ")
})