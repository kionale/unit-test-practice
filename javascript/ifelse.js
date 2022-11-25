/**
 * 
 * @param {*} desc to check if a num is an even number
 * @param {*} param num : num to be tested to be even or odd
 * @param {*} return It's an even / not a even number
 * 
 * 
 */
// var sentence = '';
function ifelse(num) {
    if (num % 2 == 0) {
        return "It's an even number.";
    } else {
        return "Not a even number.";
    }
}

    module.exports = ifelse;