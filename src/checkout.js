const {
  quantityOfProductsInBasket,
  totalPriceReturn,
  gbpFormatter
} = require("./utils/totalCost");
const {
  veryCheapChairDiscount,
  percentageDiscount,
} = require("./utils/promotions");
const { BARCODE, CHAIRDISCOUNT, THRESHOLD, PERCENTAGE } = require("./data/discount");


const checkout = (basket, products) => {
  if (basket.length === 0) return false;

  let costBeforeDiscount = totalPriceReturn(basket, products);

  const totalProducts = quantityOfProductsInBasket(basket);

  if (veryCheapChairDiscount(totalProducts, BARCODE)) {
    const totalChairs = totalProducts[BARCODE];

    let discount = totalChairs * CHAIRDISCOUNT 
    costBeforeDiscount -= discount
  }

  const costAfterDiscountChecks = percentageDiscount(costBeforeDiscount, PERCENTAGE, THRESHOLD)

  return gbpFormatter(costAfterDiscountChecks)
};

module.exports = checkout;
