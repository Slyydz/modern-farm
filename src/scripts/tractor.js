// Import Statements 
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import {createSunflower} from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js";
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import { addPlant } from "./field.js"

//declaring the imported functions to variables
const asparagusObject = createAsparagus();
const wheatObject = createWheat();
const soybeanObject = createSoybean();
const cornObject = createCorn();
const potatoObject = createPotato();
const sunflowerObject = createSunflower();

//Export the plantSeeds function
export const plantSeeds = (growingPlan) => {
    for (const count of growingPlan){
        for (const count2 of count){
            switch(count2){
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



// if(count2 == "Asparagus"){
//     addPlant(asparagusObject);
// }
// if(count2 == "Wheat"){
//     addPlant(wheatObject);
// }
// if(count2 == "Soybean"){
//     addPlant(soybeanObject);
// }
// if(count2 == "Corn"){
//     addPlant(cornObject);
// }
// if(count2 == "Potato"){
//     addPlant(potatoObject)
// }
// if(count2 == "Sunflower"){
//     addPlant(sunflowerObject);
// }