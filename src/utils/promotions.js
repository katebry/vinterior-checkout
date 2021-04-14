// TODO:
// 2+ "Very Cheap Chairs" = 8.50 for each

const veryCheapChairDiscount = () => {
  return false;
};

const percentageDiscount = (total, PERCENTAGE, THRESHOLD) => {
  return total >= THRESHOLD ? ((100 - PERCENTAGE) / 100) * total : total;
};


module.exports = { percentageDiscount, veryCheapChairDiscount };
