const sumAll = function (num1, num2) {
    // first line uses Math.sign method to check whether either of the arguments are NOT a positive number 

    // remember you don't have to say ELSE IF can just say IF if you want all the if's to be true
    
    if (!(Math.sign(num1 || num2) == 1)) return 'ERROR'
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
    if (num1 > num2) {
            const temp = num1
            num1 = num2
            num2 = temp
        }
        let finalSum = 0
        for (let i = num1; i <= num2; i++) {
            finalSum += i
        }
        return finalSum
    }




module.exports = sumAll

