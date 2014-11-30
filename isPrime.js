// Create a function to return true or false
// if the number passed in is a prime number

var isPrime = function(num) {
		if(num <= 1) {
			return false
		} 
		for(var i = 2; i < num; i += 1) {
			if( (num % i) === 0) {
				return false
			}
		
		}
	return true
}

isPrime(13);
console.log("Is this a prime number?" + " " + isPrime(13));