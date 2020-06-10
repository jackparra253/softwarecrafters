function fizzBuzz(number) {
    const divibleBy = (divider, number) => number % divider === 0;

    if(divibleBy(15, number))
        return 'fizzbuzz';

    if(divibleBy(3, number))
        return 'fizz';

    if(divibleBy(5, number))
        return 'buzz';

    return number;
}

module.exports = fizzBuzz;
