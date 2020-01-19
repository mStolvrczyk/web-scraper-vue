export default class Functions {
  transformDetails ({ name, rate, opinions }) {
    return {
      name: name.replace(' ', ''),
      rate: parseFloat(rate),
      opinions: parseInt(opinions)
    }
  }
  transformShops ({ shopName, price }) {
    return {
      shopName,
      price: parseFloat(price.replace(' zł', ''))
    }
  }
  transformShopsToExport ({ shopName, price }) {
    return {
      shopName,
      price
    }
  }
  transformSingleShop (shop) {
    return {
      shopName: shop.shopName,
      price: shop.price
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
  transformCommentsToExport ({ author, date, rating, content, advantages, disadvantages }) {
    return {
      author: author.replace(' ', ''),
      date: date.substring(0, 16),
      content,
      recommendation: rating.recommendation,
      rate: rating.rate,
      advantages: advantages.join(', '),
      disadvantages: disadvantages.join(', ')
    }
  }
  transformSingleComment (comment) {
    return {
      author: comment.author.replace(' ', ''),
      date: comment.date.substring(0, 16),
      content: comment.content,
      recommendation: comment.rating.recommendation,
      rate: comment.rating.rate,
      advantages: comment.advantages.join(', '),
      disadvantages: comment.disadvantages.join(', ')
    }
  }
}
