const name = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");
const city = sessionStorage.getItem("city");
const pincode = sessionStorage.getItem("pincode");
const mobile = sessionStorage.getItem("mobile");

document.getElementById("name").textContent = `Name: ${name}`;
document.getElementById("email").textContent = `Email: ${email}`;
document.getElementById("city").textContent = `City: ${city}`;
document.getElementById("pincode").textContent = `Pincode: ${pincode}`;
document.getElementById("mobile").textContent = `Mobile Number: ${mobile}`;

sessionStorage.clear();
