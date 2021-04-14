// finds and returns the quantity of each product in the basket, dependent on barcode.
const productsInBasket = (basket) => {
  if (basket.length <= 0) return false

  const quantityOfProducts = basket.reduce((obj, product) => {
    obj[product] = ++obj[product] || 1;
    return obj;
  }, {});
  
  return quantityOfProducts
  
};

module.exports = { productsInBasket };
