function carToGo(budget, season) {

    let typeClassCar = "";
    let typesOfCars = "";

    if (budget <= 100) {
        typeClassCar = "Economy class";
        if (season === "Summer") {
            typesOfCars = "Cabrio";
            budget *= 0.35;
        } else if (season === "Winter") {
            typesOfCars = "Jeep";
            budget *= 0.65;
        }
    } else if (budget <= 500) {
        typeClassCar = "Compact class";
        if (season === "Summer") {
            typesOfCars = "Cabrio";
            budget *= 0.45;
        } else if (season === "Winter") {
            typesOfCars = "Jeep";
            budget *= 0.80;
        }
    } else {
        typeClassCar = "Luxury class";
        typesOfCars = "Jeep";
        budget *= 0.90;
    }

    console.log(`${typeClassCar}`);
    console.log(`${typesOfCars} - ${budget.toFixed(2)}`);
}

carToGo(450, "Summer");
carToGo(450, "Winter");
carToGo(1010, "Summer");
carToGo(99.99, "Summer");
carToGo(1010, "Winter");
carToGo(70.50, "Winter");