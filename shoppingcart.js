const products = [
    {name:'shampo',price: 300,quantity:2},
    {name:'shirt',price: 500,quantity:4},
    {name:'pant',price: 700,quantity:8},
    {name:'chironi',price: 100,quantity:8}
];

function cardTotal(product){
    let total = 0;
     for(const pro of product){
        console.log(pro);

        const thisProductCost = pro.price * pro.quantity;
        total = total + thisProductCost;
     }
     return total;
}
const total = cardTotal(products);
console.log(total);
