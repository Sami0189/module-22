const jim = 56;
const tim = 64;
const kim = 53;

if(jim>tim && jim>kim){
    console.log('jim will own it.');
}
else if(tim>jim && tim>kim){
    console.log('tim will own it.');
}
else{
    console.log('kim will own it.');
}


//inside a function 

function max (num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}

const output = max(43,65,37);
console.log(output);


const max1 = Math.max(54,65,23,76,87,967);
console.log(max1);