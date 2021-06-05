// Form function

// User selections
let firstName = document.getElementById("fname");
let secondName = document.getElementById("lname");
let locationName = document.getElementById("lctn");
let selectedCookies = document.getElementById("cookies");
let selectedQuantities = document.getElementById("quant");

// Summary
let nameFirst = document.getElementById("name-first");
let nameSecond = document.getElementById("name-last");
let nameLocation = document.getElementById("name-location");
let nameCookies = document.getElementById("name-cookies");
let nameQuantities = document.getElementById("name-quantity");
let nameTotal = document.getElementById("name-total");

// on click event Display summary

document.getElementById("order-sub").addEventListener("click", function () {
  // validation

  if (firstName.value == "") {
    alert("Please fill in all the fields to place an order!");
    return;
  } else if (secondName.value == "") {
    alert("Please fill in all the fields to place an order!");
    return;
  } else if (locationName.value == "") {
    alert("Please fill in all the fields to place an order!");
    return;
  } else if (selectedCookies.value == "") {
    alert("Please fill in all the fields to place an order!");
    return;
  } else if (selectedQuantities.value == "") {
    alert("Please fill in all the fields to place an order!");
    return;
  }

  nameFirst.innerHTML = firstName.value;
  nameSecond.innerHTML = secondName.value;
  nameLocation.innerHTML = locationName.value;
  nameCookies.innerHTML = selectedCookies.value;
  nameQuantities.innerHTML = selectedQuantities.value;

  // TOtal
  if ((selectedCookies.value = "snickerdoodles")) {
    let total = 150 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Chocolate Chip Cookies")) {
    let total = 165 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Oat Mean Raisin Cookies")) {
    let total = 185 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Gingersnaps")) {
    let total = 265 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Shortbread Cookies")) {
    let total = 335 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Peanut Butter Cookies")) {
    let total = 965 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Whoopie Pie")) {
    let total = 165 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  } else if ((selectedCookies.value = "Sugar Cookies")) {
    let total = 415 * selectedQuantities.value;
    nameTotal.innerHTML = total + " Ksh/=";
  }

  //   Checkout
  document
    .getElementById("checkout-sub")
    .addEventListener("click", function () {
      alert(
        "Payement is about to be processed. Are you sure you want to proceed?"
      );
      document.getElementById("myform").reset();
      window.location.reload();
    });
});
