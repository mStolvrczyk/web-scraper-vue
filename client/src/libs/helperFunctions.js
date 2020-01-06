export default class Functions {
  transformShops ({ shopName, price }) {
    return {
      shopName,
      price
    }
  }
  transformComments ({ author, date, rating, content, advantages, disadvantages }) {
    return {
      author,
      date,
      rating,
      content,
      advantages: advantages.length === 0 ? ['brak informacji'] : advantages,
      disadvantages: disadvantages.length === 0 ? ['brak informacji'] : disadvantages
    }
  }
  transformDetails ({ name, rate, opinions }) {
    return {
      name,
      rate,
      opinions
    }
  }
}
