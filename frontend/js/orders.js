const ordersDiv = document.getElementById("orders");

fetch("http://localhost:5000/api/orders")
.then(res => res.json())
.then(data => {

    data.forEach(order => {

        ordersDiv.innerHTML += `
            <div>
                <h3>${order.productId.name}</h3>
                <p>Type: ${order.orderType}</p>
                <p>Total: ₹${order.totalAmount}</p>
                <p>Status: ${order.status}</p>
            </div>
        `;

    });

});