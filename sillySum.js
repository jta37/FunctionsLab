// write a function that takes an array of numbers
// and returns the sum of each number multiplied by
// its index
// * This is the answer *


var myArr = [1,2,3,4,5];
var total = 0;

var sillySum = function (myArr) {
	for ( i = 0; i < myArr.length; i += 1) {
		var count = (i * myArr[i]);
		total += count;
	}
	return total
}

sillySum(myArr)