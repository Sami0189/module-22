/**
 * first100-->100
 * 101 to 200-->90
 * above 200-->70
 */


function layeredDiscountedTotal(quantity){
    const first100Price = 100;
    const second100price = 90;
    const above200Price = 70;

    if(quantity<=100){
        const total = quantity  * first100Price;
        return total;
    }
    else if(quantity<=200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingtotal = remainingQuantity * second100price;
        const total = first100Total + remainingtotal;
       
        return total;
    }
    else{
        const first100Total = 100 * first100Price; // Price = 10000
        const second100Total = 100 * second100price; // Price = 9000
        const remainingQuantity = quantity-200; // Remaining = 10;
        const remainimgTotal = remainingQuantity * above200Price; // Price = 700
        const total= first100Total + second100Total + remainimgTotal; // Total Price = 19700
        return total;
    }
} const total = layeredDiscountedTotal(210);
console.log(total);


const sami = [4,5,76,87,98,89];

const highest = Math.max(...sami);
console.log(highest)