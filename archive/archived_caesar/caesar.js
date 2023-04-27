const caesar = function(str, shift) {
    return str.split('').map(char => encode(char, shift)).join('');
};

function encode(char, shift) {
    if ((/[A-Z]/).test(char)) {
        return encodeLetter(char, shift, 65);
    }
    if ((/[a-z]/).test(char)) {
        return encodeLetter(char, shift, 97);
    }
    return char;
}

function encodeLetter(letter, shift, base) {
    let code = letter.charCodeAt() - base; // from 0 to 25
    let newCode = (code + shift) % 26;
    if (newCode < 0) {
        newCode += 26;
    }
    return String.fromCharCode(base + newCode);
}

// Do not edit below this line
module.exports = caesar;
