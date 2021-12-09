var randomInArray = (tbl) => {

    return tbl[Math.floor(Math.random() * tbl.length)];

}

var  firstLetterInUpperCase = (strl) => {

    let tbl = str.split("");
    let up = tbl[0].toUpperCase();
    tbl.shift();
    tbl.unshift(up)
    let final = tbl.join("");
    return final;

}

var randomNumber = (min, max)  => {

    return min + Math.floor(Math.random() * (max - min));

}

var getLocalTime = ()  => {

    return new Date().toLocaleTimeString();

}

var reverseString = (str) => {

    return str.split("").reverse().join("");

}

module.exports = {

    randomInArray,
    firstLetterInUpperCase,
    randomNumber,
    getLocalTime,
    reverseString

}