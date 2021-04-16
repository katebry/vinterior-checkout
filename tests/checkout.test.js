const checkout = require("../src/checkout");
const products = require("../src/data/products");
const chai = require("chai");
var expect = chai.expect;

describe("checkout", () => {
  it("If no products are in the basket, the function returns false", () => {
    const basket = [];
    expect(checkout(basket, products)).to.be.false;
  });
  it("If one product is in the basket, the function returns the total cost", () => {
    const basket = ["001"];
    expect(checkout(basket, products)).to.equal("£9.25");
  });
  it("If the basket contains two Very Cheap Chairs, the discount is applied and the function returns the total cost", () => {
    const basket = ["001", "001"];
    const basket2 = ["001", "003", "001"]
    expect(checkout(basket, products)).to.equal("£17.00");
    expect(checkout(basket2, products)).to.equal("£36.95")
  });
  it("If the basket is not eligible, no discount is applied and the function returns the total cost", () => {
    const basket = ["001", "003", "003"];
    expect(checkout(basket, products)).to.equal("£49.15");
  });
  it("If the basket contains an amount over £60, the discount is applied and the function returns the total cost", () => {
    const basket = ["002", "002"];
    const basket2 = ["001","002","003"]
    expect(checkout(basket, products)).to.equal("£81.00");
    expect(checkout(basket2, products)).to.equal("£66.78");
  });
  it("If the basket contains an amount over £60 and more than two Very Cheap Chairs, both discounts are applied", () => {
    const basket = ["002", "002", "001", "001"];
    const basket2 = ["001", "002", "001", "003"]
    expect(checkout(basket, products)).to.equal("£96.30");  
    expect(checkout(basket2, products)).to.equal("£73.76");
  });
});
