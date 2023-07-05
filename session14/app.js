// init stores
let stores = [
    { id: 1, name: "Milk", count: 100 }, 
    { id: 2, name: "Yakult", count: 100 }, 
    { id: 3, name: "Butter", count: 100, }
];

class Item {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
}

let cart = [];

function findMax(array) {
    let max = array.reduce((max, item) => {
        if (max > item.id) {
            return max;
        } else {
            return item.id;
        }
    })
    return max;
}

function checkExists(array, value) {
    let index = array.findIndex(e => e.name == value);
    if (index == -1) {
        console.log(`No item found in ${array}. Please try again`);
    }
    return index;
}

function renderProducts() {
    for (index in stores) {
        console.log(stores[index].name, "-", stores[index].count);
    }
    if (cart.length > 0) {
        for (index in cart) {
            console.log(cart[index].name, "-", cart[index].count);
        }
    } else {
        console.log("No product in the cart.");
    }
}

function addToCart() {
    let product = prompt("Input the name of the product");
    let index = checkExists(stores, product);
    if (index !== -1) {
        stores[index].count-=1;
        // check if product exists in cart
        cart_index = checkExists(cart, product);
        if (cart_index !== -1) {
            cart[cart_index].count += 1;
        } else {
            let item = new Item(product, 1);
            cart.push(item);
        }
        renderProducts();
    }
}

function updateCart(index) {

}


function purchase() {
    let state = true;
    while (state) {
        let action = prompt("Input your action").toUpperCase();
        switch (action) {
            case "C":
                addToCart();
                break;
            case "R":
                renderProducts();
                break;
            default:
                console.log("Invalid input. Try again, please");
                break;
        }
    }
}
