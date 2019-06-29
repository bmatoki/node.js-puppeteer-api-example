const puppeteer = require('puppeteer');
const log = require('../utils/logger');

async function saveWebsiteToPdf() {
  log.info('puppeteer.service: function saveWebsiteToPdf() started');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://boazmatoki.com/');
  log.info('puppeteer.service: function saveWebsiteToPdf() launching website.');
  await page.waitFor(1000);
  // in case you want to wait for selector for fully loading instead of time.
  // await page.waitForSelector('#id');
  const pdf = await page.pdf({ format: 'A4', printBackground: true });
  log.info('puppeteer.service: function saveWebsiteToPdf() save file as pdf and close page and browser');
  await page.close();
  await browser.close();
  return pdf;
}

async function takeScreenShotExamples() {
  log.info('puppeteer.service: function takeScreenShotExamples() started');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  log.info('puppeteer.service: function takeScreenShotExamples() launching website.');
  await page.goto('https://boazmatoki.com/');
  log.info('puppeteer.service: function takeScreenShotExamples() taking screenshot 1.');
  await page.screenshot({ path: 'screenshots/full.png', fullPage: true });
  await page.click('.more-info-triangle');
  log.info('puppeteer.service: function takeScreenShotExamples() taking screenshot 2 after click on element.');
  await page.screenshot({ path: 'screenshots/section.png' });
  log.info('puppeteer.service: function takeScreenShotExamples() changing website.');
  await page.goto('https://www.google.com/');
  log.info('puppeteer.service: function takeScreenShotExamples() typing value in new website');
  await page.type('input.gLFyf.gsfi', 'boaz matoki');
  log.info('puppeteer.service: function takeScreenShotExamples() clicking enter');
  await page.keyboard.press('Enter');
  await page.waitFor(1000);
  log.info('puppeteer.service: function takeScreenShotExamples() taking new screenshot 3');
  await page.screenshot({ path: 'screenshots/search.png', fullPage: true });
  // closing page and browser for not keep chrome process run at server.
  log.info('puppeteer.service: function takeScreenShotExamples() close page and browser');
  await page.close();
  await browser.close();
}
module.exports = { saveWebsiteToPdf, takeScreenShotExamples };
