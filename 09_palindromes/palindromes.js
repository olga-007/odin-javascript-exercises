const palindromes = function (str) {
    const s = str.toLowerCase().replaceAll(/[^\w]/g, '');
    const reverse = s.split('').reverse().join('');
    return s == reverse;
};

// Do not edit below this line
module.exports = palindromes;
