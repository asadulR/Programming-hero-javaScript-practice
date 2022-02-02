/*
    first 10 miles = 10 animal / mile
    second 10 miles = 50 animal / mile
    after 20 miles = 100 animal / mile

    total animal seen in miles....
*/

function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityAfter20Miles = 100;
    if(miles <= 10) {
        const count = miles * animalDensityFirst10Miles;

        return count;
    }
    else if(miles <= 20) {
        const first10Animal = 10 * animalDensityFirst10Miles;

        const restMiles = miles - 10;
        const second10Animal = restMiles * animalDensitySecond10Miles;

        const totalAnimal = first10Animal + second10Animal;
        return totalAnimal;
    }
    else{
        const first10Animal = 10 * animalDensityFirst10Miles;
        const second10Animal = 10 * animalDensitySecond10Miles;

        const restMiles = miles - 20;

        const restDensAnimals = restMiles * animalDensityAfter20Miles;

        const totalAnimal = first10Animal + second10Animal + restDensAnimals;

        return totalAnimal;
    }
}



const animals = animalCount(30);

console.log(animals);



