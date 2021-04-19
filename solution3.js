// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    if (distanceToPump <= (mpg * fuelLeft)) {
//       return true
//    } else {
//       return false
//    }
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    console.log(distanceToPump / mpg)
// 	return distanceToPump / mpg <= fuelLeft;
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
