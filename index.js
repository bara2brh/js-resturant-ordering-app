import { menuArray } from "./data.js";

function render(){
    let menuHtml = "";
    menuArray.forEach(item => {
        menuHtml+=`
          <div class="menu-item">
                <div class="item-container">
                    <img class="item-img" src="${item.img}" alt="">
                    <div class="item-info">
                        <h1 class="item-name"> ${item.name} </h1>
                        <p class="ingredients"> ${item.ingredients.join(" , ")} </p>
                        <p class="price">$${item.price}</p>
                    </div>
                </div>
                <button class="add-btn" id="add-order-btn">+</button>
            </div>
        `
    });

    document.getElementById("items-menu").innerHTML = menuHtml;
}

render();