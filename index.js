module.exports = {
    randomInArray = (tbl) => {
        return tbl[Math.floor(Math.random() * tbl.length)];
    },
    firstLetterInUpperCase = (strl) => {
        let tbl = str.split("");
        let up = tbl[0].toUpperCase();
        tbl.shift();
        tbl.unshift(up)
        let final = tbl.join("");
        return final;
    },
    randomNumber = (min, max)  => {
        return min + Math.floor(Math.random() * (max - min));
    },
    getLocalTime = ()  => {
        return new Date().toLocaleTimeString();
    },
    reverseString = (str) => {
        return str.split("").reverse().join("");
    }
}