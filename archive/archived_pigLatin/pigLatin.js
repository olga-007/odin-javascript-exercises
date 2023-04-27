function pigLatin(str) {
    return str.split(' ').map(word => pigLatinize(word)).join(' ');
}

function pigLatinize(word) {
    const regex = /^[^aeiouq]*qu|^[^aeiou]*/i;
    let consonantPrefix = word.match(regex)[0];
    return word.slice(consonantPrefix.length) + consonantPrefix + "ay";
}
  
// Do not edit below this line
module.exports = pigLatin;
