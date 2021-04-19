function find_average(array) {
	let sum = 0;
	array.forEach((v) => (sum += v));
	return sum / array.length;
}
const arr = [1, 2, 3, 4];
// console.log(find_average(arr));

// Another Solution
const findAverage = (array) => {
   return array.reduce((prev, curr) => prev + curr , 0) / array.length
} 

console.log(findAverage(arr));

