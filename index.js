import { menuArray } from "./data.js";
const orderArray = [];

function renderMenu() {
    let menuHtml = "";
    menuArray.forEach(item => {
        menuHtml += `
          <div class="menu-item">
                <div class="item-container">
                    <img class="item-img" src="${item.img}" alt="">
                    <div class="item-info">
                        <h1 class="item-name"> ${item.name} </h1>
                        <p class="ingredients"> ${item.ingredients.join(" , ")} </p>
                        <p class="price">$${item.price}</p>
                    </div>
                </div>
                <button class="add-btn" id="add-order-btn" data-item-id="${item.id}">+</button>
            </div>
        `
    });

    document.getElementById("items-menu").innerHTML = menuHtml;
}

function renderOrder() {
    let orderHtml = "<h1>Your Order</h1>";
    const orderItemsEl = document.getElementById("ordered-items");
    orderArray.forEach((item,index) => {
        orderHtml += `
          <div class="item-info">
                    <div>
                    <h1 class="item-name">${item.name}</h1>
                    <button class="remove-btn" id="remove-btn" data-item-index="${index}">Remove</button>
                    </div>
                    <p class="price">$${item.price}</p>
                </div>

        `
    })
    orderItemsEl.innerHTML = orderHtml;
    orderItemsEl.style.display = "block";
}

function calculateTotalPrice(){
    let totalPrice = 0;
    orderArray.forEach(item => {
        totalPrice += item.price;
    })
    document.getElementById("total-price").textContent = `$${totalPrice}`;
    document.querySelector(".total-price").style.display = "flex";
}

function removeFromOrder(index){
    orderArray.splice(index,1);
    renderOrder();
    calculateTotalPrice();
}

renderMenu();

function addToOrder(itemId) {
    const targetItem = menuArray.filter(item => item.id == itemId)[0];
    orderArray.push(targetItem);
    renderOrder();
    calculateTotalPrice();
}

document.addEventListener("click", (event) => {
    if (event.target.dataset.itemId && event.target.id === "add-order-btn") {
        addToOrder(event.target.dataset.itemId);
    }

    if (event.target.dataset.itemIndex && event.target.id === "remove-btn") {
        removeFromOrder(event.target.dataset.itemIndex);
    }

})