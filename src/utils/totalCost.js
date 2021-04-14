// finds and returns the quantity of each product in the basket, dependent on barcode.
const quantityOfProductsInBasket = (basket) => {
  if (basket.length <= 0) return false;

  const quantityOfProducts = basket.reduce((obj, product) => {
    obj[product] = ++obj[product] || 1;
    return obj;
  }, {});

  return quantityOfProducts;
};

// matches the barcode/ corresponding product and returns the combined price.
const totalPriceReturn = (basket, products) => {
  const combinedPrice = basket.map((item) => products[item].price).reduce((result, item) => {
    return result + item;
  }, 0);

  return combinedPrice.toFixed(2);
};

module.exports = { quantityOfProductsInBasket, totalPriceReturn };
