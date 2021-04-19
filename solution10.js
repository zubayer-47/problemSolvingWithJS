const arr = ["a", "b", "c", "d", "e"];

// function first2(arr, n = 1) {
// 	let temp = [];

// 	if (arr.length < n) {
// 		for (let i = 0; i < arr.length; i++) {
// 			temp.push(arr[i]);
// 		}
// 	} else {
// 		for (let i = 0; i < n; i++) {
// 			temp.push(arr[i]);
// 		}
// 	}

// 	return temp;
// }

// Another One Solution
const first = (arr, n = 1) => arr.slice(0, n);

// console.log(first2(arr, 0));
console.log(first(arr));
console.log(first(arr, 2));
console.log(first(arr, 3));
console.log(first(arr, 0));

