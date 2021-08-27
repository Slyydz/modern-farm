

const growingArray = [];

export const addPlant = (seedObj) => {
    growingArray.push(seedObj);
}

const harvestArray = [];
export const addPlantHarvest = (seedObj) => {
    harvestArray.push(seedObj)
}

export const usePlants = () =>{
    return growingArray;
}