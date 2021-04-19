const removeChar = (str) => {
	return str
		.split("")
		.slice(1, str.length - 1)
		.join("");
};

console.log(removeChar("Zubayer"));
