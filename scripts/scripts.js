// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length

function arrayOfMultiples (num, length) {
	let newArray1 = 0;
	let newArray2 = [];

	for (var i=0; i<length; i++) {
	newArray1 = newArray1 + num;
	newArray2.push(newArray1);
	}
	return newArray2;
}

/* citation stackoverflow.com */