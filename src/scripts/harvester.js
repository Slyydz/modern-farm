
const harvestArray = [];

export const harvestPlants = (plantArray) => {
    for(const count of plantArray){
        let countOutput = 0;
        countOutput = plantArray.output;
        for(countOutput of plantArray){
            switch(plantArray.type){
                case "Asparagus":
                    addPlant(asparagusObject);
                    break;
                case "Wheat":
                    addPlant(wheatObject);
                    break;
                case "Soybean":
                    addPlant(soybeanObject);
                case "Corn":
                    addPlant(cornObject);
                    break;
                case "Potato":
                    addPlant(potatoObject);
                    break;
                case "Sunflower":
                    addPlant(sunflowerObject);
                    break;
                default:
                    console.log("Invalid Array Input")
            }
        }
    }
}