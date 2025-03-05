function bikeRace(juniorCyclists, seniorCyclists, typeOfRoute) {

    let juniorTax = 0;
    let seniorTax = 0;
    let totalParticipants = juniorCyclists + seniorCyclists;

    if (typeOfRoute === "trail") {
        juniorTax = 5.50;
        seniorTax = 7;
    } else if (typeOfRoute === "cross-country") {
        juniorTax = 8;
        seniorTax = 9.50;
        if (totalParticipants >= 50) {
            juniorTax *= 0.75;
            seniorTax *= 0.75;
        }
    } else if (typeOfRoute === "downhill") {
        juniorTax = 12.25;
        seniorTax = 13.75;
    } else if (typeOfRoute === "road") {
        juniorTax = 20;
        seniorTax = 21.50;
    }

    let totalIncome = (juniorCyclists * juniorTax) + (seniorCyclists * seniorTax);
    let costs = totalIncome * 0.05;
    let finalIncome = totalIncome - costs;

    console.log(finalIncome.toFixed(2));
}

bikeRace(10, 20, "trail");
bikeRace(21, 26, "cross-country");
bikeRace(30, 25, "cross-country");
bikeRace(10, 10, "downhill");
bikeRace(3, 40, "road");