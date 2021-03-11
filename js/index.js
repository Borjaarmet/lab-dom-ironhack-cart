// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    const price = product.querySelector('.price span').textContent;
    const quantity = product.querySelector('.quantity input').value;
    const subTotal = price * quantity;
    const subTotalPrice = product.querySelector('.subtotal span');
    subTotalPrice.textContent = subTotal;
    return subTotal;
}


function calculateAll() {

    let total;
    let subtotalArray = [];
    let totalValue = document.querySelector('#total-value span');


    const allProducts = document.querySelectorAll('.product');
    console.log(allProducts);

    subTotal = 0;
    allProducts.forEach(elem => {
        subTotal = updateSubtotal(elem);
        subtotalArray.push(subTotal);

    });

    total = subtotalArray.reduce((acc, curr) => acc + curr)
    console.log(total);
    totalValue.innerHTML = total;
}






// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);

    target.parentNode.parentNode.remove()

    calculateAll()
}

// ITERATION 5

function createProduct() {

    const newProduct = document.getElementById('text');
    newProduct.innerHTML = '';
    const newPrice = document.getElementById('number');
    newPrice.innerHTML = '';
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = `< tr class = "product" >
    <
    td class = "name" >
    <
    span > Ironhack t - shirt < /span> <
    /td> <
    td class = "price" > $ < span > 22.00 < /span></td >
    <
    td class = "quantity" >
    <
    input type = "number"
value = "0"
min = "0"
placeholder = "Quantity" / >
    <
    /td> <
    td class = "subtotal" > $ < span > 0 < /span></td >
    <
    td class = "action" >
    <
    button class = "btn btn-remove" > Remove < /button> <
    /td> <
    /tr>`

}

window.addEventListener('load', () => {

    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    const removeBtns = document.querySelectorAll('.btn-remove');
    removeBtns.forEach(btn => btn.addEventListener('click', removeProduct))
    console.log("removing buttons")

    const createBtn = document.getElementById('create');
    createBtn.addEventListener('click', createProduct)


});