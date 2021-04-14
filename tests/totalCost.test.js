const { productsInBasket } = require("../src/utils/totalCost");
const chai = require("chai");
const expect = chai.expect;

describe("productsInBasket", () => {
  it("If no products are in the basket, the function returns false", () => {
    const basket = [];
    expect(productsInBasket(basket)).to.be.false;
  });

  it("If one product is in the basket, the function returns the quantity of the item", () => {
    const basket = ["001"];
    expect(productsInBasket(basket)).to.eql({ "001": 1 });
  });

  it("If two products with the same code are in the basket, the function returns the combined quantity", () => {
    const basket = ["001", "001"];
    expect(productsInBasket(basket)).to.eql({ "001": 2 });
  });

  it("If products are in the basket, the function returns the quantity of each product", () => {
    const basket = ["001", "002", "001", "001", "003"];
    expect(productsInBasket(basket)).to.eql({ "001": 3, "002": 1, "003": 1 });
  });
});
