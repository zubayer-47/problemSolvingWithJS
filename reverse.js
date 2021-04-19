function reversedString(str) {
	return str.split("").reverse().join("");
}

// console.log(reversedString("ABM Zubayer"));

function reversedString(str) {
	let reverse = "";

	for (let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}

console.log(reversedString('ABM Zubayer'))
