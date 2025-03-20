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
    <img src="${imgLink}" alt="${title}">
    <p>${title}</p>
    <button>Perziureti</button>`;

    products.appendChild(productDiv);
  }
  document.body.appendChild(products);
}
