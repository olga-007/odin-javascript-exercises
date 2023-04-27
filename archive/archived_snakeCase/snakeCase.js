const snakeCase = function(str) {
    const wordsRegex = /\w+/ig;
    let words = str.match(wordsRegex);
    
    if (words.length === 1) { // single word, so let's try camelCase
        const camelRegex = /[A-Z]*[a-z]+/g;
        words = words[0].match(camelRegex);
    }
    return words.join('_').toLowerCase();
};

// Do not edit below this line
module.exports = snakeCase;
