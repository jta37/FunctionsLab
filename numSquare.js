//Create a function called numSquare that will
//return an array of all perfect square numbers up to
//a max number

var numSquare = function (maxNum) {
	var squareArr = [];
	for (i = 2; (i * i) <= maxNum; i += 1) {
		squareArr.push(i);
   }
		return squareArr;
}

console.log(numSquare(100));