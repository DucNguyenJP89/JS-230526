let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "1.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "2.PNG",
    price: 120000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "3.PNG",
    price: 220000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "4.PNG",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "5.PNG",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "6.PNG",
    price: 120000,
  },
];

// check if items exist in cart
let listCards = JSON.parse(localStorage.getItem('carts')) || [];
console.log(listCards);

// if items exists, render all items in the cart on screen
if (listCards.length > 0) { renderCart(); }

// initiate the quantity number on the cart icon
let cartQuantity = listCards.length;
console.log(cartQuantity);
quantity.innerText = cartQuantity;

function render() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(products,${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
render();

// render items in cart
function renderCart() {
  listCard.innerHTML = "";
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    let newItem = document.createElement("li");
    newItem.innerHTML = `
      <img src="image/${value.image}">
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
        <button onclick="addToCard(listCards,${key})">+</button><span class="count">${value.count}</span><button onclick="removeFromCard(${key})">-</button>
      </div>
    `
    listCard.appendChild(newItem);
    // update total price
    totalPrice += value.price * value.count;
    total.innerText = `${totalPrice.toLocaleString()}`;
  })
}

function addToCard(array, key) {
  console.log(array[key]);
  let item = array[key];
  let idx = listCards.findIndex(e => e.id === item.id);
  console.log(idx);
  if (idx === -1) {
    item.count = 1;
    listCards.push(item);
  } else {
    listCards[idx].count += 1;
  }
  //add list to local storage
  localStorage.setItem('carts', JSON.stringify(listCards));
  // sort listCards
  listCards.sort(function(a,b) {return a.id - b.id});
  // update number on cart icon
  cartQuantity = listCards.length;
  quantity.innerText = `${cartQuantity}`;
  console.log(cartQuantity);
  console.log(listCards);
  // render all items in shopping cart
  renderCart();
}

function removeFromCard(key) {
  console.log(listCards[key]);
  let item = listCards[key];
  item.count -= 1;
  if (item.count === 0) {
    listCards.splice(key, 1);
    cartQuantity -= 1;
  }
  localStorage.setItem('carts', JSON.stringify(listCards));
  quantity.innerText = `${cartQuantity}`;
  renderCart();
}
