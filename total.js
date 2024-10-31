const products = [
    {name:'shampo',price: 300},
    {name:'shirt',price: 500},
    {name:'pant',price: 700},
    {name:'chironi',price: 100}
];

function getShoppingTotal(product){
    let total = 0;
    for(const pro of product){
        console.log(pro);
        total = total + pro.price;
    }return total;
}
const total = getShoppingTotal(products);
console.log(total);