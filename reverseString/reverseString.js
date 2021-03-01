const reverseString = function(str) {
    let splitString = str.split('')
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join('')
    return joinArray
}

module.exports = reverseString


// create a function that returns it's input reversed

// input = string, output = string containing reversed letters of original string input

// Step 1 - use the split() method to split the original string into an array

// Step 2 - use array reverse() method to reverse the newly created array 

// Step 3 - use the join() method to join all elements of the array into a string

// Return reversed string