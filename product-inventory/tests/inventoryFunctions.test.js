const { calculateDiscount, filterProducts, sort } = require('../inventoryFunctions.js');

describe('calculateDiscount', () => {

    test("should apple a valid discount rate", () => {
        expect(calculateDiscount(100, 0.1)).toBe(90);
    });

    test("should handle an invalid discount rate gracefully", () => {
        expect(calculateDiscount(100, -0.1)).toBe(null);
    });

    test("should handle edge case with price of 0", () => {
        expect(calculateDiscount(0, 0.2)).toBe(0);
    });
});

describe('filterProducts', () => {
    test("should return array of filtered products", () => {
        let products = [
  { name: "TV", price: 800 },
  { name: "Speaker", price: 150 },
  { name: "USB Cable", price: 10 }
];
            expect(filterProducts(products, p => p.price >= 100 && p.price <= 500)).toEqual([{name: "Speaker", price: 150}]);
    });
    test("should return undefined if non listed item is entered", () => {
        let products = [
  { name: "TV", price: 800 },
  { name: "Speaker", price: 150 },
  { name: "USB Cable", price: 10 }
];
            expect(filterProducts(products, p => !p.name)).toEqual(undefined);
    })
});