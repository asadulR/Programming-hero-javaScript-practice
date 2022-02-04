/*
chair wood = 3cft / chair
table wood = 10cft/ table
bed wood = 50cft/ bed

Wood price = 250 / cft

*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    //  Wood calculation 
    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    //  Total wood
    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    const woodPricePerCft = 250;
    const totalWoodPrice = totalWood * woodPricePerCft;
    
    return totalWoodPrice;
}


const firstNeed = woodCalculator(1, 2, 3);
console.log('Total price is', firstNeed ,'taka.');




