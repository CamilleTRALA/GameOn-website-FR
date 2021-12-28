function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const first = document.getElementById("first");
const last = document.getElementById("last");
const form = document.getElementsByName("reserve");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

first.addEventListener("input", validateFirst());

function checkInputs() {
  return (
    validateFirst() &&
    validateLast() &&
    validateEmail() &&
    validateBirthdate() &&
    validateQuantity() &&
    validateLocation() &&
    validateCheckbox()
  );
}

function validateFirst() {
  let x = first.value.trim();
  console.log(x);
  if (x.length < 2 || x == null) {
    first.setAttribute(invalid);
    first.removeAttribute(valid);
    return false;
  } else {
    first.setAttribute("valid");
    first.removeAttribute("invalid");
    return true;
  }
}
