const fizzBuzz = require('../core/fizzBuzz');

describe('FizzBuzz', () => {
    it('should return one if receive one', () => {
        const expected = 1;

        const result = fizzBuzz(1);

        expect(result).toBe(expected);
    });

    it('should return fizz if receive three', () => {
        const expected = 'fizz';

        const result = fizzBuzz(3);

        expect(result).toBe(expected);
    });

    it('should return buzz receice five', () => {
        const expected = 'buzz';

        const result = fizzBuzz(5);

        expect(result).toBe(expected);
    });

    it('should return fizzbuzz if receive fifteen', () => {
        const expected = 'fizzbuzz';

        const result = fizzBuzz(15);

        expect(result).toBe(expected);
    });

    it('should return fizz if receive any number divisible by three', () => {
        const expected = 'fizz';

        const result = fizzBuzz(9);

        expect(result).toBe(expected);
    });

    it('should return buzz if receive any number divisible by five', () => {
        const expected = 'buzz';

        const result = fizzBuzz(25);

        expect(result).toBe(expected);
    });

    it('should return fizzbuzz if receive any number divisible by fifteen', () => {
        const expected = 'fizzbuzz';

        const result = fizzBuzz(30);

        expect(result).toBe(expected);
    });

    it('should return the same number that receives', () => {
        const expected = 97;

        const result = fizzBuzz(97);

        expect(result).toBe(expected);
    })

});