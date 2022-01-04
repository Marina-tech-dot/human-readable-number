let arr = [];


module.exports = function toReadable (number) {
    number = String(number);

    if (arr.legth != 0) {
        arr = [];
    }

    readNumber(number);

    return arr.join(' ');
}

function readNumber(number) {

    // для определения идекса
    let firstOfThree = number.length - 3;
    let firstOfTwo = number.length - 2;
    let lastIndex = number.length - 1;
    // десятичные части
    let numDecimal = `${number[firstOfTwo]}0`;
    let numUnits = `${number[lastIndex]}`;
    // для трехзначных
    let numDecimalOfThreehudres = number[1] + number[2];


    if (number.length == 1) {
        return fomZeroToNine(number);
    }

    if ((number.length == 2) && ((number >= 10 && number <= 20) || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90)) {
        return fromTenToTwentyAndInteger(number);
    }

    if (number.length == 2) {
        return fromTenToTwentyAndInteger(numDecimal) + fomZeroToNine(numUnits);
    }

    if (number.length == 3 && number[1] == 0 && number[2] == 0) {
        return fomZeroToNine(number[0]) + arr.push("hundred");
    }

    if (number.length == 3 && number[1] == 0) {
        return fomZeroToNine(number[0]) + arr.push("hundred") + fomZeroToNine(number[2]);
    }

    if ((number.length == 3) && (numDecimalOfThreehudres >= 10 && numDecimalOfThreehudres <= 20) || numDecimalOfThreehudres == 30 || numDecimalOfThreehudres == 40 || numDecimalOfThreehudres == 50 || numDecimalOfThreehudres == 60 || numDecimalOfThreehudres == 70 || numDecimalOfThreehudres == 80 || numDecimalOfThreehudres == 90) {
        return fomZeroToNine(number[0]) + arr.push("hundred") + fromTenToTwentyAndInteger(numDecimalOfThreehudres);
    }

    if (number.length == 3) {
        return fomZeroToNine(number[0]) + arr.push("hundred") + fromTenToTwentyAndInteger(numDecimal) + fomZeroToNine(numUnits);
    }

}

function fomZeroToNine(number) {
    switch (+number) {
        case 0: return arr.push('zero');
            break;
        case 1: return arr.push('one');
            break;
        case 2: return arr.push('two');
            break;
        case 3: return arr.push('three');
            break;
        case 4: return arr.push('four');
            break;
        case 5: return arr.push('five');
            break;
        case 6: return arr.push('six');
            break;
        case 7: return arr.push('seven');
            break;
        case 8: return arr.push('eight');
            break;
        case 9: return arr.push('nine');
            break;
    }
}

function fromTenToTwentyAndInteger(number) {
    switch (+number) {
        case 10: return arr.push('ten');
            break;
        case 11: return arr.push('eleven');
            break;
        case 12: return arr.push('twelve');
            break;
        case 13: return arr.push('thirteen');
            break;
        case 14: return arr.push('fourteen');
            break;
        case 15: return arr.push('fifteen');
            break;
        case 16: return arr.push('sixteen');
            break;
        case 17: return arr.push('seventeen');
            break;
        case 18: return arr.push('eighteen');
            break;
        case 19: return arr.push('nineteen');
            break;
        case 20: return arr.push('twenty');
            break;
        case 30: return arr.push('thirty');
            break;
        case 40: return arr.push('forty');
            break;
        case 50: return arr.push('fifty');
            break;
        case 60: return arr.push('sixty');
            break;
        case 70: return arr.push('seventy');
            break;
        case 80: return arr.push('eighty');
            break;
        case 90: return arr.push('ninety');
            break;
    }
}