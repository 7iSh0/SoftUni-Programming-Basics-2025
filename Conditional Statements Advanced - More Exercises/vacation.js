function vacation(budget, season) {

    let accommodations = "";
    let location = "";

    if (budget <= 1000) {
        accommodations = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            budget *= 0.65;
        } else if (season === "Winter") {
            location = "Morocco";
            budget *= 0.45;
        }
    } else if (budget <= 3000) {
        accommodations = "Hut";
        if (season === "Summer") {
            location = "Alaska"
            budget *= 0.80;
        } else if (season === "Winter") {
            location = "Morocco";
            budget *= 0.60;
        }
    } else {
        accommodations = "Hotel";
        if (season === "Summer") {
            location = "Alaska";
            budget *= 0.90;
        } else if (season === "Winter") {
            location = "Morocco";
            budget *= 0.90;
        }
    }

    console.log(`${location} - ${accommodations} - ${budget.toFixed(2)}`);
}

vacation(800, "Summer");
vacation(799.50, "Winter");
vacation(3460, "Summer");
vacation(1100, "Summer");
vacation(5000, "Winter");
vacation(2543.99, "Winter");