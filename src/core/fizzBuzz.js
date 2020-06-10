const { match } = require("x-match-expression");

function fizzBuzz(number) {
    const divibleBy = divider => number => number % divider === 0;

    return match(number)
        .case(divibleBy(15), 'fizzbuzz')
        .case(divibleBy(3), 'fizz')
        .case(divibleBy(5), 'buzz')
        .default(number);
}

module.exports = fizzBuzz;