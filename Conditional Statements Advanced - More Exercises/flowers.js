function flowers(purchasedChrysanthemums, purchasedRoses, purchasedTulips, season, holiday) {

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    let totalFlowers = purchasedChrysanthemums + purchasedRoses + purchasedTulips;

    let totalCost = 0;

    switch(season) {
        case "Spring":
            chrysanthemumsPrice = 2;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        case "Summer":
            chrysanthemumsPrice = 2;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        case "Autumn":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
    }

    let totalCostWithoutHoliday = (purchasedChrysanthemums * chrysanthemumsPrice) + (purchasedRoses * rosesPrice) + (purchasedTulips * tulipsPrice);
    let totalCostWithHoliday = totalCostWithoutHoliday + (totalCostWithoutHoliday * 0.15);

    if (holiday === "Y") {
        totalCost = totalCostWithHoliday;
    } else {
        totalCost = totalCostWithoutHoliday;
    }

    if (season === "Spring" && purchasedTulips > 7) {
        totalCost *= 0.95;
    } else if (season === "Winter" && purchasedRoses >= 10) {
        totalCost *= 0.90;
    }

    if (totalFlowers > 20) {
        totalCost *= 0.80;
    }

    totalCost += 2;

    console.log(totalCost.toFixed(2));
}

flowers(2, 4, 8, "Spring", "Y");
flowers(3, 10, 9, "Winter", "N");
flowers(10, 10, 10, "Autumn", "N");