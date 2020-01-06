const axios = require('axios');
const functions = require('../libs/helperFunctions');
const cheerio = require('cheerio')

module.exports = {
    scrapePage: async () => {
        let shops = []
        let details = []
        let comments = []
        await axios.get('https://www.ceneo.pl/49541116/opinie-1')
            .then(functions.getData)
            .then((data) => {
                const $ = cheerio.load(data)
                const siteHeading = $('.product-content')
                let name = siteHeading.find('.product-name').text()
                let rate = siteHeading.find('.product-score').text().substring(0, 3)
                let opinions = siteHeading.find('.product-reviews-link').children('span').text()
                details.push({
                    name,
                    rate,
                    opinions
                })
            })
        for (let i = 1; i < 5; i++) {
            await axios.get(`https://www.ceneo.pl/49541116/opinie-${i}`)
                .then(functions.getData)
                .then((data) => {
                    const $ = cheerio.load(data)
                    const commentsWrapper = $('.product-reviews')
                    commentsWrapper.find('.review-box').each((i, el) => {
                        let advantages = []
                        let disadvantages = []
                        let author =  $(el).find('.reviewer-name-line').text()
                        let rating =  {
                            recommendation: $(el).find('.product-review-summary').children('em').text(),
                            rate: $(el).find('.review-score-count').text()
                        }
                        let date = 'Wystawiono '+$(el).find('.review-time').children('time').text()
                        let content = $(el).find('.product-review-body').text()
                        $(el).find('.pros-cell').children('ul').children('li').each((i, el) => {
                            advantages.push($(el).text())
                        })
                        $(el).find('.cons-cell').children('ul').children('li').each((i, el) => {
                            disadvantages.push($(el).text())
                        })
                        comments.push(({
                            author,
                            date,
                            rating,
                            content,
                            advantages,
                            disadvantages
                        }))
                    })

                });
        }
        await axios.get('https://www.ceneo.pl/49541116')
            .then(functions.getData)
            .then((data) => {
                const $ = cheerio.load(data)
                const siteHeading = $('.product-offers-group')
                siteHeading.find('.product-offer').each((i, el) => {
                    let shopName = $(el).children('.cell-store-logo').children('a').children('img').attr('alt')
                    let price = $(el).children('.cell-price').children('a').children('span').children('span').children('span').text()+' zł'
                    shops.push({
                        shopName,
                        price
                    })
                });
            })
        return {
            details,
            shops,
            comments
        }
    },
}


