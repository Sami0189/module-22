const mobiles =[
    {name :'samsung',price :20000,camera: '108mp',color:'black'},

    {name :'MI',price :30000,camera: '108mp',color:'black'},

    {name :'oppo',price :24000,camera: '108mp',color:'black'},

    {name :'iPhone',price :200000,camera: '108mp',color:'black'},

    {name :'tesla',price :10000,camera: '108mp',color:'black'}
];

function getCheapestObject(phones){
    let min = phones[0];
    for(const phone of phones){
      if(phone.price<min.price){
        min = phone;
      }
    }return min;
}
const min = getCheapestObject(mobiles);
console.log(min);


// highest price
function getCheapestObject(phones){
    let max = phones[0];
    for(const phone of phones){
      if(phone.price>max.price){
       max = phone;
      }
    }return max;
}
const max = getCheapestObject(mobiles);
console.log(max);