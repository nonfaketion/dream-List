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

  if(title ==="" || info ===""|| price===""){return};

  const newItem = new Item(title, info, price, isAcquired);
  List.push(newItem);
  RenderList();
}

function deleteItemFromList(itemID) {
  const element = document.getElementById(itemID)
  List.splice(itemID, 1) 
  element.remove() 
}

function editItemFromList() {

}

function toggleItem(item) {
  item.isAcquired  = !item.isAcquired;

}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
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
    const deleteButton = document.createElement("button");
    const toggleButton = document.createElement('button');
    deleteButton.innerText="Remove";
    toggleButton.innerText= "Toggle Acquired";

    deleteButton.addEventListener('click', () => deleteItemFromList(itemList.id))
    toggleButton.addEventListener('click', function(){
      toggleItem(item);
      RenderList();
    })

    itemTitle.classList = "item-title";
    itemInfo.classList = "item-info";
    itemPrice.classList = "item-price";
    itemAcquired.classList = "item-acquired";

    itemTitle.innerText = "Item: "+item.title;
    itemInfo.innerText = "Info: "+item.info;
    itemPrice.innerText = "Price: "+item.price;
    itemAcquired.innerText = "Acquired?: "+item.isAcquired;


    unorderList.appendChild(itemList);
    itemList.appendChild(itemTitle);
    itemList.appendChild(itemInfo);
    itemList.appendChild(itemPrice);
    itemList.appendChild(itemAcquired);
    itemList.appendChild(deleteButton);
    itemList.appendChild(toggleButton);

    
    var color = getRandomRgb();
    itemList.style.background = color;
    itemList.style.boxShadow  = "0px 5px 10px "+color;


  });

  document.querySelector("#item").value = "";
  document.querySelector("#info").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#acquired").checked = false;

}



const userSubmit = document.querySelector('#submit');
userSubmit.addEventListener('click', addItemToList);