const veryCheapChairDiscount = (quantity, discountedProduct) => {
  let addDiscount = false
  for (const [barcode, amount] of Object.entries(quantity)) {
    if (barcode === discountedProduct && amount >= 2) {
      addDiscount = true
      return addDiscount
    }
  }
  return addDiscount
};

const percentageDiscount = (total, PERCENTAGE, THRESHOLD) => {
  return total >= THRESHOLD ? ((100 - PERCENTAGE) / 100) * total : total;
};


module.exports = { percentageDiscount, veryCheapChairDiscount };
