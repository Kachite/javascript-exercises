const removeFromArray = function(initialArray, ...removed) {
        const finalArray = initialArray.filter(item => !removed.includes(item));
        return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
