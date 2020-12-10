/*
 https://adventofcode.com/2020/day/4
 Answer
*/
fs = require('fs');

const requiredFields = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

let valid = 0;

fs.readFile('./2020/day-04-puzzle-1.txt', 'utf8', function (error, data) {
    if (error) {
        return console.log(error);
    }

    let passports = data.split(/\r\n\r\n/);

    passports.forEach(passport => {
        let passportFields = [];
        let field, value;
        let credentials = passport.split(/\r\n|\s/);
        credentials.forEach(credential => {
            [field, value] = credential.split(":");
            passportFields.push(field);
        });
        let intersection = requiredFields.filter(x => passportFields.includes(x));

        if (arrayEquals(requiredFields, intersection)) {
            valid++;
        }
    });
    console.log(valid);
});