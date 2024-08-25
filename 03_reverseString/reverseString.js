const reverseString = function(text) {
    let reverse = text.split('');
    let reversed = ''

    for (let i = reverse.length - 1; i >= 0; i --){
        reversed += [reverse[i]];
    }
return reversed;
};

// Do not edit below this line
module.exports = reverseString;
