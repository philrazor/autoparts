const products = [
  { name: 'Mercedes Rim', brand: 'mercedes', type: 'rims', model: 'model 1' },
  { name: 'BMW Tire', brand: 'bmw', type: 'tires', model: 'model 2' },
  { name: 'Volkswagen Engine', brand: 'volkswagen', type: 'engines', model: 'model 3' },
  { name: 'Audi Bumper', brand: 'audi', type: 'bumpers', model: 'model 4' },
  // Add more products here
];

const searchBar = document.getElementById('search-bar');
const brandSelect = document.getElementById('brand');
const productList = document.getElementById('product-list');

function displayProducts(filteredProducts) {
  productList.innerHTML = '';

  filteredProducts.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - Brand: ${product.brand}, Type: ${product.type}, Model: ${product.model}`;
    productList.appendChild(listItem);
  });
}

searchBar.addEventListener('input', updateProductList);
brandSelect.addEventListener('change', updateProductList);

function updateProductList() {
  const searchText = searchBar.value.toLowerCase();
  const selectedBrand = brandSelect.value;

  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    const typeMatch = product.type.toLowerCase().includes(searchText);
    const searchMatch = product.name.toLowerCase().includes(searchText);
    return brandMatch && (typeMatch || searchMatch);
  });

  displayProducts(filteredProducts);
}

// Initial display of all products
displayProducts(products);
