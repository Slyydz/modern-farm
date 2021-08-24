import {createPlan} from "./plan.js"
import {createCorn} from "./seeds/corn.js"
import {createWheat} from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";

const cornVar = createCorn()
const asparagusVar = createAsparagus();
const wheatVar = createWheat();
const planCreated = createPlan();

console.log(planCreated);
console.log(cornVar);
console.log(asparagusVar);

const testArray = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

plantSeeds(testArray);

const storePlants = usePlants();

console.log(storePlants);


console.log(harvestPlants(storePlants));
