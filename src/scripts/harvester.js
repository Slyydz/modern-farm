import { addPlantHarvest } from "/src/scripts/field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import {createSunflower} from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js";
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"

const asparagusObject = createAsparagus();
const wheatObject = createWheat();
const soybeanObject = createSoybean();
const cornObject = createCorn();
const potatoObject = createPotato();
const sunflowerObject = createSunflower();

export const harvestPlants = (harvestPlan) => {
    for (const count of harvestPlan){
            switch(count.type){
                case "Asparagus":
                    addPlantHarvest(asparagusObject);
                    break;
                case "Wheat":
                    addPlantHarvest(wheatObject);
                    break;
                case "Soybean":
                    addPlantHarvest(soybeanObject);
                case "Corn":
                    addPlantHarvest(cornObject);
                    break;
                case "Potato":
                    addPlantHarvest(potatoObject);
                    break;
                case "Sunflower":
                    addPlantHarvest(sunflowerObject);
                    break;
                default:
                    console.log("Invalid Array Input")
            }
         }
}