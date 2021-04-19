// const enough = (cap, on, wait) => {
// 	const sum = Math.abs(on + wait);

// 	if (sum < cap) {
// 		return 0;
// 	} else if (sum > cap) {
// 		return Math.abs(cap - sum);
// 	} else if (sum === cap) {
// 		return 0;
// 	}
// };

const enough = (cap, on, wait) => on + wait > cap ? on + wait - cap : 0

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
