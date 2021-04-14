const checkout = require("../src/checkout");
const products = require("../data/products");
const chai = require("chai");
var expect = chai.expect;

describe("checkout", () => {
  it("returns false", () => {
    expect(checkout(products)).to.be.false
  });
});

// TODO: checkout tests...
