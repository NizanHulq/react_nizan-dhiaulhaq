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
  const table = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  productExisting.forEach((product, index) => {
    const newRow = table.insertRow(table.length);
    const cellData = [
      index + 1,
      product.name,
      product.price,
      product.category,
      product.freshness,
      product.description,
      product.image,
    ];

    cellData.forEach((data, cellIndex) => {
      const cell = newRow.insertCell(cellIndex);
      cell.innerHTML = data;
    });
  });
};

const validateInput = (
  input,
  validationElement,
  validationMessage,
  isValid
) => {
  const disallowedCharacters = /[@#\/]/;

  if (input.value === "") {
    validationElement.textContent = validationMessage;
    validationElement.style.color = "red";
    isValid = false;
  } else if (input.value.length > 25) {
    validationElement.textContent =
      "Nama produk tidak boleh lebih dari 25 karakter.";
    validationElement.style.color = "red";
    isValid = false;
  } else if (disallowedCharacters.test(input.value)) {
    validationElement.textContent =
      "Nama produk tidak boleh mengandung simbol.";
    validationElement.style.color = "red";
    isValid = false;
  } else {
    validationElement.textContent = "Tampak baik!";
    validationElement.style.color = "green";
  }

  return isValid;
};

const checkInputs = () => {
  let isValid = true;

  const validationName = document.querySelector(".invalid-name");
  const validationPrice = document.querySelector(".invalid-price");
  const validationCat = document.querySelector(".invalid-cat");
  const validationFreshness = document.querySelector(".invalid-freshness");
  const validationDescription = document.querySelector(".invalid-description");
  const validationImage = document.querySelector(".invalid-image");

  isValid = validateInput(
    productNameInput,
    validationName,
    "Silakan masukkan nama produk yang valid.",
    isValid
  );
  isValid = validateInput(
    productPriceInput,
    validationPrice,
    "Silakan masukkan harga produk yang valid.",
    isValid
  );

  if (productCatSelect.value === "Choose...") {
    validationCat.textContent = "Pilih kategori produk yang valid.";
    validationCat.style.color = "red";
    isValid = false;
  } else {
    validationCat.textContent = "Tampak baik!";
    validationCat.style.color = "green";
  }

  const isChecked = [...productFreshnessInputs].some((input) => input.checked);
  if (!isChecked) {
    validationFreshness.textContent =
      "Pilih tingkat kebersihan produk yang valid.";
    validationFreshness.style.color = "red";
    isValid = false;
  } else {
    validationFreshness.textContent = "Tampak baik!";
    validationFreshness.style.color = "green";
  }

  isValid = validateInput(
    productDescriptionInput,
    validationDescription,
    "Silakan masukkan deskripsi produk yang valid.",
    isValid
  );
  isValid = validateInput(
    productImageInput,
    validationImage,
    "Silakan masukkan gambar produk yang valid.",
    isValid
  );

  return isValid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

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
