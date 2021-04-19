const abbrevName = (name) =>
	name
		.split(" ")
		.map((name) => name.split("")[0])
		.join(".")
		.toUpperCase();
console.log(abbrevName('Zubayer Abm')) // Z.A 
