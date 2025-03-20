const getStoreProducts = async () => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/`);
    displayProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};

getStoreProducts();

function displayProducts(data) {
  const products = document.createElement("div");
  products.className = "products";

  for (const product of data) {
    const title = product.title;
    const imgLink = product.image;

    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
    <div class="image">
      <img src="${imgLink}" alt="${title}">
    </div>
    <div class="info"><p>${title}</p>
      <button onclick="showProduct(${product.id})">Perziureti</button>
    </div>`;

    products.appendChild(productDiv);
  }
  document.body.appendChild(products);
}

async function showProduct(product) {
  try {
    const res = await axios.get(
      "https://fakestoreapi.com/products/" + String(product)
    );
    console.log(`https://fakestoreapi.com/products/` + product, res);
  } catch (error) {
    console.log(error);
  }
}
