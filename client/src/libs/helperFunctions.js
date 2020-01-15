export default class Functions {
  transformShops ({ shopName, price }) {
    return {
      shopName,
      price: parseFloat(price.replace(' zł', ''))
    }
  }
  transformComments ({ author, date, rating, content, advantages, disadvantages }) {
    return {
      author: author.replace(' ', ''),
      date: date.substring(0, 16),
      rating,
      content,
      advantages: advantages.length === 0 ? ['brak informacji'] : advantages,
      disadvantages: disadvantages.length === 0 ? ['brak informacji'] : disadvantages
    }
  }
  transformDetails ({ name, rate, opinions }) {
    return {
      name: name.replace(' ', ''),
      rate: parseFloat(rate),
      opinions: parseInt(opinions)
    }
  }
}
