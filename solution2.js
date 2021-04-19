function abbrevName(name) {
	return name.split(' ').map(name => name.split('')[0]).join('.').toUpperCase()
}

console.log(abbrevName("Sam harris"));
