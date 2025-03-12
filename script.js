function convertToRoman(num) {
  	const arr =[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],
        [90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
	

  //your code here
	let ans = "";
   for(int i =0 ; i<arr.length ; i++){
	   while(num>=arr[i][0]){
		   ans += arr[i][1];
		   num -= arr[i][0];
	   }
   }

	return ans;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
