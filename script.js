function convertToRoman(num) {
    // Use an array for clarity and ease of iteration
    const romanNumerals = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    let ans = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][0]) {
            ans += romanNumerals[i][1];
            num -= romanNumerals[i][0];
        }
    }

    return ans;
}

// Test the function
console.log(convertToRoman(36)); 

// Do not edit below this line
module.exports = convertToRoman;
