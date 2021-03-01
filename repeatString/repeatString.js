

const repeatString = function(str, num) {
    let newString = ''
    for(let i = 0; i < num; i++){
        newString += str
    }
    (num < 0) ? 'ERROR' : newString
}

module.exports = repeatString


// write a function that repeats a given string a given number of times

//1) Understand 2) Plan 3) Divide & Conquer

// input - string, number. Output - string repeated by the given number. 
// Create a variable to store string output
// Create a loop which loops over the string input the amount of times that is given by the number input
// Set loop condition which adds the string input to itself once each iteration 
// Set additional condition so only positive numbers will be accepted 