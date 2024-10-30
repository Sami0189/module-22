const disha = 43;
const asa = 76;

if(disha>asa){
    console.log('disha will get the strawberry:');
}
else{
    console.log('asa will get the strawberry');
}

//inside a function

function getMax(num1,num2){
   if(num1>num2){
    return num1;
   }
   else{
    return num2;
   }
}

const max = getMax(43,98);
console.log(max);