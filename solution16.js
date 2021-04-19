// function powersOfTwo(n) {
// 	let resultArr = [];

// 	for (let i = 0; i <= n; i++) {
// 		resultArr.push(2 ** i);
// 	}

// 	return resultArr;
// }

// // const powersOfTwo = (n) => Array.from({ length: n + 1 }, (v, k) => 2 ** k);

// console.log(powersOfTwo(20));

const arr = [
	[1,2, ['A', 'B', 'C'] , 3],
	[4,5,6, ['D', 'E', 'F']],
	[['G', 'H', 'I'] ,7, 8, 9]
]

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		for (let k = 0; k < arr[i][j].length; k++) {
			console.log(arr[i][j][k])
		}
	}
}
