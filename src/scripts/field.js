

const growingArray = []

export const addPlant = (seedObj) => {
    growingArray.push(seedObj);
}

export const usePlants = () =>{
    return growingArray;
}