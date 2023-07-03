function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;
  const mobile = document.getElementById("mobile").value;

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("city", city);
  sessionStorage.setItem("pincode", pincode);
  sessionStorage.setItem("mobile", mobile);

  window.location.href = "order_placed.html";
}

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const pincode = document.getElementById("pincode").value;
  const mobile = document.getElementById("mobile").value;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePincode(pincode)) {
    alert("Please enter a valid six-digit pincode.");
    return;
  }

  if (city.trim() === "") {
    alert("Please enter your city.");
    return;
  }

  if (mobile.trim() === "") {
    alert("Please enter your mobile number.");
    return;
  }

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("city", city);
  sessionStorage.setItem("pincode", pincode);
  sessionStorage.setItem("mobile", mobile);

  window.location.href = "order-placed.html";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePincode(pincode) {
  const pincodeRegex = /^\d{6}$/;
  return pincodeRegex.test(pincode);
}

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", validateForm);
orderForm.addEventListener("submit", submitOrder);
