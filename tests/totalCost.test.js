const { productsInBasket } = require("../src/utils/totalCost");
const products = require("../src/data/products");
const chai = require("chai");
var expect = chai.expect;

describe("productsInBasket", () => {
  it("If no products are in the basket, the function returns false", () => {
    const basket = [];
    expect(productsInBasket(basket, products)).to.be.false;
  });
});
