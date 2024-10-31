function add (num1,num2){
    const sum = num1 + num2;
    return sum;
}
function subtract(num1,num2){
    const min = num1 - num2;
    return min;
}
function multiply(num1,num2){
    const mul = num1 * num2;
    return mul;
}
function divide(num1,num2){
    const divi = num1 / num2;
    return divi;
}

function calculator(a,b,operation){
    if(operation==='add'){
        const result = add(a,b);
        return result;
    }
    else if(operation==='subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operation==='multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation==='divide'){
        const result = divide(a,b);
        return result;
    }
    else{
        return "only 'add','subtract','multiply','divide' operation is allowed."
    }
}
const result = calculator(3,4,'divide');
console.log(result);