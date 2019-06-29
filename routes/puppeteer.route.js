const express = require('express');
const log = require('../utils/logger');
const cacheUtil = require('../utils/cache.util');
const puppeteerService = require('../services/puppeteer.service');

const router = express.Router();

async function printWebsiteToPDF(req, res) {
  log.info('puppeteer route: GET api/puppeteer/pdf printWebsiteToPDF() Started');
  try {
    const pdf = await puppeteerService.saveWebsiteToPdf();
    res.contentType('application/pdf');
    res.setHeader('Content-Type', 'application/force-download');
    res.setHeader('Content-Disposition', 'attachment; filename=website.pdf');
    return res.status(200).send(pdf).end();
  } catch (error) {
    log.error(`puppeteer route: GET api/puppeteer/pdf printWebsiteToPDF() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('puppeteer route: GET api/puppeteer/pdf printWebsiteToPDF() Ended');
  }
}

async function takeScreenShots(req, res) {
  log.info('puppeteer route: GET api/puppeteer/screenshots takeScreenShots() Started');
  try {
    await puppeteerService.takeScreenShotExamples();
    return res.status(200).json({
      success: true,
      msg: 'Screenshots saved in server folder.',
    });
  } catch (error) {
    log.error(`puppeteer route: GET api/puppeteer/screneshots takeScreenShots() error: ${error}`);
    cacheUtil.incrementErrorCount(error.message || error);
    return res.status(400).json({
      success: false,
      msg: `Error : ${error}`,
    });
  } finally {
    log.info('puppeteer route: GET api/puppeteer/screenshots takeScreenShots() Ended');
  }
}


// routes
router.get('/pdf', printWebsiteToPDF);
router.get('/screenshots', takeScreenShots);


module.exports = router;
