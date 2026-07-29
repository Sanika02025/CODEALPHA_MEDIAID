const productsDiv = document.getElementById("products");

fetch("http://localhost:5000/api/products")
  .then((res) => res.json())
  .then((data) => {

    data.forEach((product) => {

      productsDiv.innerHTML += `
        <div class="card">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>Buy:</strong> ₹${product.buyPrice}</p>
          <p><strong>Rent/Day:</strong> ₹${product.rentPricePerDay}</p>
          <p><strong>Stock:</strong> ${product.stock}</p>
          <a href="product.html?id=${product._id}">
    <a href="product.html?id=${product._id}">
    <button>View Details</button>
</a>
</a>
        </div>
      `;

    });

  })
  .catch((error) => {
    console.log(error);
  });
  const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch(`http://localhost:5000/api/products/${productId}`)
.then(res => res.json())
.then(product => {

    document.getElementById("productDetails").innerHTML = `
        <h1>${product.name}</h1>

        <p>${product.description}</p>

        <h3>Buy Price: ₹${product.buyPrice}</h3>

        <h3>Rent Per Day: ₹${product.rentPricePerDay}</h3>

        <button id="buyBtn">Buy Now</button>

        <button id="rentBtn">Rent Equipment</button>
    `;

});