// get all plus buttons
let plusBtns = document.getElementsByClassName("fa-square-plus");

// loop through plusBtns and addEventListener to every button
for (let i = 0; i < plusBtns.length; i++) {
  let element = plusBtns[i];
  element.addEventListener("click", function (e) {
    element.previousElementSibling.innerText++;
    calculateTotal();
  });
}

// get all minus buttons
let minusBtns = document.getElementsByClassName("fa-square-minus");

// loop through minusBtns and addEventListener to every button
for (let i = 0; i < minusBtns.length; i++) {
  let element = minusBtns[i];
  element.addEventListener("click", function (e) {
    if (element.nextElementSibling.innerText > 1) {
      element.nextElementSibling.innerText--;
    }
    calculateTotal();
  });
}

// get all like buttons
let likeBtns = document.getElementsByClassName("fa-thumbs-up");

// loop through likeBtns and addEventListener to every button
for (let i = 0; i < likeBtns.length; i++) {
  let element = likeBtns[i];
  element.addEventListener("click", function (e) {
    element.classList.toggle("liked");
  });
}

// get all remove buttons
let trashBtns = document.getElementsByClassName("fa-trash");

// loop through likeBtns and addEventListener to every button
for (let i = 0; i < trashBtns.length; i++) {
  let element = trashBtns[i];
  element.addEventListener("click", function (e) {
    element.closest(".single-item").remove();
    calculateTotal();
  });
}

// calculate total price
function calculateTotal() {
  let total = 0;
  // get total price
  let totalPrice = document.getElementById("total");
  // get all single items
  let singleItems = document.getElementsByClassName("single-item");
  // loop through single items
  for (let i = 0; i < singleItems.length; i++) {
    let element = singleItems[i];
    let unitPrice = element.querySelector(".price").innerText;
    let quantity = element.querySelector(".quantity").innerText;
    total = total + unitPrice * quantity;
  }
  totalPrice.innerText = total;
}
calculateTotal();
