import { calculateCost } from "./costCalculator";

describe('costCalculator', () => {
    test('integer corn amount', () => {
        expect(calculateCost({corn: 3})).toBe(75);
    });
    test('non-integer corn amount less than x.5', () => {
        expect(calculateCost({corn: 3.4})).toBe(75);
    });
    test('non-integer corn amount more than x.5', () => {
        expect(calculateCost({corn: 3.6})).toBe(75);
    });
});