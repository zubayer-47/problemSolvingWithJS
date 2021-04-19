function twiceAsOld(dadYearsOld, sonYearsOld) {
	const currentSonAge = sonYearsOld * 2;

	let result;
	if (dadYearsOld < currentSonAge) {
		result = currentSonAge - dadYearsOld;
	} else {
		result = dadYearsOld - currentSonAge;
	}

	return result;
}

// console.log(twiceAsOld(20, 30));

// another solution
function twiceOld(dadAge, sonAge) {
	const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
	return twiceAsOld(dadAge, sonAge);
}
// console.log(twiceOld(20, 30));
