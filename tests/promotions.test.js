const { percentageDiscount } = require("../src/utils/promotions");
const { PERCENTAGE, THRESHOLD } = require("../src/data/discount")
const chai = require("chai");
const expect = chai.expect;

describe("percentageDiscount", () => {
    it("If the basket doesn't qualify for the percentage decrease discount, the original total is returned", () => {
      expect(percentageDiscount(30, PERCENTAGE, THRESHOLD)).to.equal(30);
      expect(percentageDiscount(59, PERCENTAGE, THRESHOLD)).to.equal(59);
    });

    it("If the basket does qualify for the percentage decrease discount, the new total is returned", () => {
        expect(percentageDiscount(60, PERCENTAGE, THRESHOLD)).to.equal(54);
        expect(percentageDiscount(66, PERCENTAGE, THRESHOLD)).to.equal(59.4);
        expect(percentageDiscount(70, PERCENTAGE, THRESHOLD)).to.equal(63);
        expect(percentageDiscount(80, PERCENTAGE, THRESHOLD)).to.equal(72);
      });
});  
