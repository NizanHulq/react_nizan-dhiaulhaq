const form = document.getElementById("form");

// Get input elements
const productNameInput = document.querySelector('input[name="product-name"]');
const productPriceInput = document.querySelector('input[name="product-price"]');
const productCatSelect = document.querySelector('select[name="product-cat"]');
const productFreshnessInputs = document.querySelectorAll(
  'input[name="product-freshness"]'
);
const productDescriptionInput = document.querySelector(
  'textarea[name="description"]'
);
const productImageInput = document.querySelector('input[name="image-product"]');

// show data from local storage
let productExisting = JSON.parse(localStorage.getItem("productData")) || [];

const showProduct = () => {
  let table = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  
  productExisting.forEach((product, index) => {

    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);

    cell1.innerHTML = index + 1;
    cell2.innerHTML = product.name;
    cell3.innerHTML = product.price;
    cell4.innerHTML = product.category;
    cell5.innerHTML = product.freshness;
    cell6.innerHTML = product.description;
    cell7.innerHTML = product.image;
  });
  
};

// Check if inputs are valid
const checkInputs = () => {
  // Get validation elements
  const validationName = document.querySelector(".invalid-name");
  const validationPrice = document.querySelector(".invalid-price");
  const validationCat = document.querySelector(".invalid-cat");
  const validationFreshness = document.querySelector(".invalid-freshness");
  const validationDescription = document.querySelector(".invalid-description");
  const validationImage = document.querySelector(".invalid-image");

  // Regular expression to match disallowed characters
  const disallowedCharacters = /[@#\/]/;

  // Check Product Name
  if (productNameInput.value === "") {
    validationName.innerHTML = "Please enter a valid Product name.";
    validationName.style.color = "red";
  } else if (productNameInput.value.length > 25) {
    validationName.innerHTML = "Product name must not exceed 25 characters.";
    validationName.style.color = "red";
  } else if (disallowedCharacters.test(productNameInput.value)) {
    validationName.innerHTML = "Product name must not contain symbols.";
    validationName.style.color = "red";
  } else {
    validationName.innerHTML = "Looks good!";
    validationName.style.color = "green";
  }

  // Check Product Price
  if (productPriceInput.value === "") {
    validationPrice.innerHTML = "Please enter a valid Product price.";
    validationPrice.style.color = "red";
  } else {
    validationPrice.innerHTML = "Looks good!";
    validationPrice.style.color = "green";
  }

  // Check Product Category
  if (productCatSelect.value === "Choose...") {
    validationCat.innerHTML = "Please select a valid Product Category.";
    validationCat.style.color = "red";
  } else {
    validationCat.innerHTML = "Looks good!";
    validationCat.style.color = "green";
  }

  // Check Product Freshness
  const isChecked = [...productFreshnessInputs].some((input) => input.checked);
  if (!isChecked) {
    validationFreshness.innerHTML = "Please select a valid Product Freshness.";
    validationFreshness.style.color = "red";
  } else {
    validationFreshness.innerHTML = "Looks good!";
    validationFreshness.style.color = "green";
  }

  // Check Product Description
  if (productDescriptionInput.value === "") {
    validationDescription.innerHTML =
      "Please enter a valid Product Description.";
    validationDescription.style.color = "red";
  } else {
    validationDescription.innerHTML = "Looks good!";
    validationDescription.style.color = "green";
  }

  // Check Product Image
  if (productImageInput.value === "") {
    validationImage.innerHTML = "Please enter a valid Product Image.";
    validationImage.style.color = "red";
  } else {
    validationImage.innerHTML = "Looks good!";
    validationImage.style.color = "green";
  }

  // Check if all inputs are valid
  const isValid = [...document.querySelectorAll(".valid")].every(
    (element) => element.style.color === "green"
  );
  return isValid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (checkInputs()) {
    const product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCatSelect.value,
      freshness: [...productFreshnessInputs].find((input) => input.checked)
        .value,
      description: productDescriptionInput.value,
      image: productImageInput.value,
    };

    productExisting.push(product);
    localStorage.setItem("productData", JSON.stringify(productExisting));

    form.reset();
    showProduct();
  }
});

document.addEventListener("DOMContentLoaded", showProduct());

