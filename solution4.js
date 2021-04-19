function bmi(weight, height) {
	const BMI = weight / (height * height);

   console.log(BMI.toFixed(2))
	if (BMI <= 18.5) {
		return "Underweight";
	} else if (BMI <= 25.0 && BMI > 18.5) {
		return "Normal";
	} else if (BMI <= 30 && BMI > 25.0) {
		return "Overweight";
	} else if (BMI > 30) {
		return "Obese";
	}
}

console.log(bmi(80, 1.8));
console.log(bmi(83, 193));
