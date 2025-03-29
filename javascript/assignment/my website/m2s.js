
function selectFusion(element) {
  const allCards = document.querySelectorAll('.fusion-card');
  allCards.forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');
  alert(`You selected: ${element.querySelector('h3').innerText}`);
}

// Open Fusion Overlay on Icon Click
document.getElementById('fusion-icon').addEventListener('click', () => {
    document.getElementById('fusion-overlay').style.display = 'flex';
  });

  // Close Overlay Function
  function closeFusion() {
    document.getElementById('fusion-overlay').style.display = 'none';
  }

  // Show Fusion Results or Navigate
  function showFusionResults() {
    const tradition = document.getElementById('tradition-select').value;
    const western = document.getElementById('western-select').value;

    if (tradition && western) {
      // Navigate or Display the fusion product section
      window.location.href = `fusion-products.html?tradition=${tradition}&western=${western}`;
    } else {
      alert('Please select both Traditional and Western styles to view fusion results.');
    }
  }

  function showFusionResults() {
    const tradition = document.getElementById('tradition-select').value;
    const western = document.getElementById('western-select').value;
  
    if (tradition && western) {
      document.querySelector(".fusion-selection h2").innerText = 
        `Fusion: ${tradition} x ${western}`;
    } else {
      alert('Please select both Traditional and Western styles.');
    }
  }
  
  window.onclick = function(event) {
    if (event.target === document.getElementById("fusion-overlay")) {
      closeFusion();
    }
  };

  //...............

  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
    displayCartItems();

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let product = this.closest(".product");
            let item = {
                id: product.dataset.id,
                name: product.dataset.name,
                price: parseInt(product.dataset.price),
                image: product.querySelector("img").src
            };

            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));

            showPopup("Item added to cart!");
            updateCartCount();
        });
    });

    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
    }

    function showPopup(message) {
        let popup = document.getElementById("popup");
        popup.textContent = message;
        popup.style.display = "block";
        setTimeout(() => popup.style.display = "none", 2000);
    }
});

// ✅ Function to Display Cart Items and Calculation
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let subtotal = 0;

    if (!cartItems) return; // Agar cart page nahi hai to kuch mat karo

    cartItems.innerHTML = ""; // Cart ko clear karna taaki naye items add ho sakein

    cart.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-image">
            <div class="cart-details">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartItems.appendChild(div);
        subtotal += item.price;
    });

    let tax = subtotal * 0.05;
    let discount = subtotal * 0.1;
    let total = subtotal + tax + 50 - discount;

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);
    document.getElementById("tax").textContent = tax.toFixed(2);
    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

// ✅ Function to Remove Item from Cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}
