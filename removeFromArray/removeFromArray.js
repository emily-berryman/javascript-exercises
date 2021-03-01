const removeFromArray = function(...args) {
    const removeFromArray = function(...args) {
        // the very first item in our list of arguments is the array, we pull it out with args[0]
        const array = args[0];
        // create a new empty array
        const newArray = [];
        // use forEach to go through the array
        array.forEach((item) => {
          // push every element into the new array
          // UNLESS it is included in the function arguments
          // so we create a new array with every item, except those that should be removed
          if (!args.includes(item)) {
            newArray.push(item);
          }
        });
        // and return that array
        return newArray;
      };
    }
//   let arr = array.filter(item => item !== moreArgs)
//   return arr
    


module.exports = removeFromArray

// Function that takes an array + additional arguments as an input, then removes arguments from the array and returns new array as output

// could use array filter method to filter out any elements that = the passed in arguments - and then implicitly return the new altered array
