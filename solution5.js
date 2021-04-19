function sumOfArr(arr = []) {
	let result = 0;
	arr.forEach((v) => {
		if (v > -1) {
			result += v;
		}
	});

	return result;
}

const arr = [];

console.log(sumOfArr(arr));

// TODO: Input: [1,-4,7,12]
// TODO: Output: 1 + 7 + 12 = 20

// TODO: Test Cases: [1,2,3,4,5], [1,-2,3,4,5] , [1,-4,7,12], [], [-1,-2,-3,-4,-5], [-1,2,3,4,-5]
