function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const reserve = document.getElementById("reserve");
const succes = document.getElementById("succes");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close, .btn-close");
const first = document.getElementById("first");
const last = document.getElementById("last");
const form = document.querySelector("form");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationA = document.getElementById("location");
const checkbox1 = document.getElementById("checkbox1");

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

first.addEventListener("input", (e) => {
  validateString(first);
});
last.addEventListener("input", (e) => {
  validateString(last);
});
email.addEventListener("input", (e) => {
  validateEmail(email);
});
birthdate.addEventListener("input", (e) => {
  validateBirthdate(birthdate);
});
quantity.addEventListener("input", (e) => {
  validateQuantity(quantity);
});
locationA.addEventListener("input", (e) => {
  validateLocation(locationA);
});
checkbox1.addEventListener("input", (e) => {
  validateCheckbox(checkbox1);
});

function checkInputs() {
  input1 = validateString(first);
  input2 = validateString(last);
  input3 = validateEmail(email);
  input4 = validateBirthdate(birthdate);
  input5 = validateQuantity(quantity);
  input6 = validateLocation(locationA);
  input7 = validateCheckbox(checkbox1);

  return input1 && input2 && input3 && input4 && input5 && input6 && input7;
}

function validateString(string) {
  let x = string.value.trim();
  if (x.length < 2 || x == null) {
    string.parentNode.setAttribute("data-error-visible", "true");
    return false;
  } else {
    string.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Email validation

function validateEmail(email) {
  let x = email.value.trim();
  emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(x)) {
    email.parentNode.setAttribute("data-error-visible", "false");
    return true;
  } else {
    email.parentNode.setAttribute("data-error-visible", "true");
    return false;
  }
}

// Birth date validation

function validateBirthdate(birthdate) {
  let isValidDate = birthdate.value.trim();

  if (isValidDate != "") {
    birthdate.parentNode.setAttribute("data-error-visible", "false");
    return true;
  } else {
    birthdate.parentNode.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateQuantity(quantity) {
  if (quantity.value.trim() === "") {
    quantity.parentNode.setAttribute("data-error-visible", "true");
    return false;
  } else {
    let isValidQuantity = quantity.value.trim();

    if (Number.isInteger(Number(isValidQuantity)) && isValidQuantity != "") {
      quantity.parentNode.setAttribute("data-error-visible", "false");
      return true;
    } else {
      quantity.parentNode.setAttribute("data-error-visible", "true");
      return false;
    }
  }
}

function validateLocation(locationA) {
  let isValidLocation = false;

  for (let i = 1; i <= locationA.childElementCount / 2; i++) {
    locationChecked = document.querySelector(
      `#location input:nth-of-type(${i})`
    ).checked;
    if (locationChecked) {
      isValidLocation = true;
      locationA.setAttribute("data-error-visible", "false");
    }
  }

  if (isValidLocation === false) {
    locationA.setAttribute("data-error-visible", "true");
  }

  return isValidLocation;
}

function validateCheckbox(checkbox1) {
  if (checkbox1.checked) {
    checkbox1.parentNode.setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    checkbox1.parentNode.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validate(){
  if(checkInputs()){
    reserve.style.display = "none";
    succes.style.display = "block";
  }
}