var items = [
  { "Id": 1, "name": "Item 1", "price": 10.99, "Image": "https://example.com/item1.jpg" },
  { "Id": 2, "name": "Item 2", "price": 15.99, "Image": "https://example.com/item2.jpg" },
  { "Id": 3, "name": "Item 3", "price": 20.99, "Image": "https://example.com/item3.jpg" },
  { "Id": 4, "name": "Item 4", "price": 25.99, "Image": "https://example.com/item4.jpg" },
  { "Id": 5, "name": "Item 5", "price": 30.99, "Image": "https://example.com/item5.jpg" },
  { "Id": 6, "name": "Item 6", "price": 35.99, "Image": "https://example.com/item6.jpg" },
  { "Id": 7, "name": "Item 7", "price": 40.99, "Image": "https://example.com/item7.jpg" },
  { "Id": 8, "name": "Item 8", "price": 45.99, "Image": "https://example.com/item8.jpg" },
  { "Id": 9, "name": "Item 9", "price": 50.99, "Image": "https://example.com/item9.jpg" },
  { "Id": 10, "name": "Item 10", "price": 55.99, "Image": "https://example.com/item10.jpg" }
];
for (let i = 0; i < items.length; i++) {
  var option = document.createElement("option");
  option.value = items[i].Id;
  option.dataset.name = items[i].name;
  option.dataset.price = items[i].price;
  option.dataset.img = items[i].Image;
  option.text = items[i].name;
  document.getElementById("item-select").appendChild(option);
}

let totalPrice = 0;

function addSection() {
  var select = document.getElementById("item-select");
  var selectedOption = select.options[select.selectedIndex];
  var quantity = document.getElementById("quantity").textContent;
  var selectedItem = {
    id: selectedOption.value,
    name: selectedOption.dataset.name,
    price: selectedOption.dataset.price,
    image: selectedOption.dataset.img,
    quantity: quantity
  };
{/* <button onclick="deleteSection(this)">Delete</button> */}
  if (selectedItem.id) {
    var newSection = document.createElement("div");
    newSection.innerHTML = `
      <p>Name: ${selectedItem.name}</p>
      <p>Price: ${selectedItem.price}</p>
      <p class="quantity_counter">Quantity: ${selectedItem.quantity}</p>
      <img src="${selectedItem.image}">
      
      <button onclick="deleteSection(this.parentNode)">Delete</button>

    `;
    // document.body.appendChild(newSection);
    document.getElementById("container").appendChild(newSection);
    document.getElementById("quantity").textContent = 1;
    totalPrice += parseFloat(selectedItem.price) * parseInt(quantity);
    document.getElementById("total-price").textContent = `Total Price: ${totalPrice}`;
  }

  document.getElementById("item-select").options[0].text = "Select an item";
  document.getElementById("item-select").value = "";

}

// function deleteSection(section) {
//   section.parentNode.remove();
// }
function deleteSection(section) {
  var deletedPrice = parseFloat(section.getElementsByTagName("p")[1].textContent.split(" ")[1]);
  totalPrice -= deletedPrice * parseInt(section.getElementsByClassName("quantity_counter")[0].textContent.split(" ")[1]);
  document.getElementById("total-price").textContent = `Total Price: ${totalPrice}`;
  document.getElementById("container").removeChild(section);
}



function increaseQuantity() {
  var quantityElement = document.getElementById("quantity");
  var quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
}

function decreaseQuantity() {
  var quantityElement = document.getElementById("quantity");
  var quantity = parseInt(quantityElement.textContent);
  if(quantity>1){
    quantity--;
    quantityElement.textContent = quantity;
  }
}

// function deleteSection(section) {
//   section.parentNode.remove();

//   // Get the price of the item being deleted
//   var itemPrice = section.querySelector("p:nth-child(2)").textContent.split(" ")[1];
//   // Get the quantity of the item being deleted
//   var itemQuantity = section.querySelector("p.quantity_counter").textContent.split(" ")[1];
//   // Update the total price by subtracting the deleted item's total price
//   totalPrice -= parseFloat(itemPrice) * parseInt(itemQuantity);
//   // Update the total price display
//   document.getElementById("total-price").textContent = `Total Price: ${totalPrice}`;
//   // Remove the section
//   section.remove();
// }