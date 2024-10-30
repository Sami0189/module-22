/**
 * chair-->3 cft
 * table-->10cft
 * bed---->50cft
 * 
 */

function woodQuantity(chair,table,bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chair * perChairWood;
    const tableTotalWood = table * perTableWood;
    const bedTotalWood = bed * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood +bedTotalWood;


    return totalWood;
}

const totalWood = woodQuantity(1,1,1);
console.log(totalWood);



/**
 * shirt price -->500
 * pant price -->300
 * shoe price -->900
 * 
 */

function design(shirt,pant,shoe){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;
    
    const totalShirtPrice = shirt * perShirtPrice;
    const totalpantPrice = pant * perPantPrice;
    const totalShoePrice = shoe * perShoePrice;

    const totalPrice = totalShirtPrice + totalpantPrice + totalShoePrice;
    

    return totalPrice;
}
const totalPrice = design(1,1,1);
console.log(totalPrice);