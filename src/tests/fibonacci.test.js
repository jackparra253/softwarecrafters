const fibonacci = require('../core/fibonacci');

describe('Fibonacci should',() => {
    test('return zero if receive zero',() => {
        expect(fibonacci(0)).toBe(0);
    })

    test('return one if receive one',() => {
        expect(fibonacci(1)).toBe(1);
    });

    test('return one if receive two',() => {
        expect(fibonacci(2)).toBe(1);
    });
    
    test('return two if receice three',() => {
        expect(fibonacci(3)).toBe(2);
    })

    test('return three if receive four',() => {
        expect(fibonacci(4)).toBe(3);
    });

    test('retur 6765 if receive 20',() => {
        expect(fibonacci(20)).toBe(6765);
    });
});