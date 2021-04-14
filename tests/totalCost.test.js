const {
  quantityOfProductsInBasket,
  totalPriceReturn,
} = require("../src/utils/totalCost");
const products = require("../src/data/products");
const chai = require("chai");
const expect = chai.expect;

describe("quantityOfProductsInBasket", () => {
  it("If no products are in the basket, the function returns false", () => {
    const basket = [];
    expect(quantityOfProductsInBasket(basket)).to.be.false;
  });

  it("If one product is in the basket, the function returns the quantity of the item", () => {
    const basket = ["001"];
    expect(quantityOfProductsInBasket(basket)).to.eql({ "001": 1 });
  });

  it("If two products with the same code are in the basket, the function returns the combined quantity", () => {
    const basket = ["001", "001"];
    expect(quantityOfProductsInBasket(basket)).to.eql({ "001": 2 });
  });

  it("If products are in the basket, the function returns the quantity of each product", () => {
    const basket = ["001", "002", "001", "001", "003"];
    expect(quantityOfProductsInBasket(basket)).to.eql({
      "001": 3,
      "002": 1,
      "003": 1,
    });
  });
});

describe("totalPriceReturn ", () => {
  it("If a product is in the basket, the price is returned", () => {
    const basket = ["001"];
    expect(totalPriceReturn(basket, products)).to.be.equal("9.25");
  });

  it("If two products with the same code are in the basket, the combined price is returned", () => {
    const basket = ["001", "001"];
    expect(totalPriceReturn(basket, products)).to.be.equal("18.50");
  });

  it("If multiple products are in the basket, the combined price is returned", () => {
    const basket = ["001", "001", "002"];
    const otherBasket = ["001", "001", "002", "003"];
    const otherOtherBasket = ["001", "001", "002", "003", "003"];
    expect(totalPriceReturn(basket, products)).to.be.equal("63.50");
    expect(totalPriceReturn(otherBasket, products)).to.be.equal("83.45");
    expect(totalPriceReturn(otherOtherBasket, products)).to.be.equal("103.40");
  });
});
