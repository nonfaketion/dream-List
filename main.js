let List = [];

function Item(title, info, price, isAcquired) {
  this.title = title;
  this.info = info;
  this.price = price;
  this.isAcquired = isAcquired;

}

function addItemToList() {
  const title = document.querySelector("#item").value;
  const info = document.querySelector("#info").value;
  const price = document.querySelector("#price").value;
  const isAcquired = document.querySelector("#acquired").checked;

  const newItem = new Item(title, info, price, isAcquired);
  List.push(newItem);
  RenderList();
}

function deleteItemFromList() {

}

function editItemFromList() {

}

function toggleItem() {

}

function RenderList() {
  const unorderList = document.querySelector("ul");
  unorderList.innerHTML = "";
  List.forEach(function (item, index) {

    const itemList = document.createElement("li");
    itemList.id = index;
    const itemTitle = document.createElement("div");
    const itemInfo = document.createElement("div");
    const itemPrice = document.createElement("div");
    const itemAcquired = document.createElement("div");

    itemTitle.classList = "item-title";
    itemInfo.classList = "item-info";
    itemPrice.classList = "item-price";
    itemAcquired.classList = "item-acquired";

    itemTitle.innerText = item.title;
    itemInfo.innerText = item.info;
    itemPrice.innerText = item.price;
    itemAcquired.innerText = item.isAcquired;

    unorderList.appendChild(itemList);
    itemList.appendChild(itemTitle);
    itemList.appendChild(itemInfo);
    itemList.appendChild(itemPrice);
    itemList.appendChild(itemAcquired);

  });
  document.querySelector("#item").value = "";
  document.querySelector("#info").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#acquired").checked = false;
}



const userSubmit = document.querySelector('#submit');
userSubmit.addEventListener('click', addItemToList);