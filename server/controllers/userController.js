const express = require('express')
const router = express.Router()
const scrapeService = require('../services/scrapeService')

router.get('/item/page/1', async (request, response) => {
    const stations = await scrapeService.scrapePage();
    response.json(stations);
});

module.exports = router
