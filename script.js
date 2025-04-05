document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const productList = document.getElementById("productList");
    const starBox = document.getElementById("starContainer");
    const starCount = document.getElementById("starCount");
    const loginBtn = document.getElementById("loginBtn");
    const accountBtn = document.getElementById("accountBtn");
  
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (loginBtn && accountBtn) {
      if (isLoggedIn) {
        loginBtn.style.display = "none";
        accountBtn.style.display = "inline-block";
        showStars();
      } else {
        loginBtn.style.display = "inline-block";
        accountBtn.style.display = "none";
      }
    }
  
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cartCount) cartCount.textContent = cart.length;
    }
  
    function showStars() {
      const stars = parseInt(localStorage.getItem("stars")) || 0;
      if (starBox && starCount) {
        if (stars > 0) {
          starBox.style.display = "flex";
          starCount.textContent = stars;
        } else {
          starBox.style.display = "none";
        }
      }
    }
  
    function loadProducts() {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      if (!productList) return;
      productList.innerHTML = "";
  
      products.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p class="price">$${product.price}</p>
          <button onclick="pay(${index})">شراء</button>
        `;
        productList.appendChild(card);
      });
    }
  
    window.pay = function(index) {
      const products = JSON.parse(localStorage.getItem("products")) || [];
      const product = products[index];
      localStorage.setItem("checkoutProduct", JSON.stringify(product));
      window.location.href = "checkout.html";
    };
  
    window.logout = function() {
      localStorage.removeItem("loggedIn");
      window.location.reload();
    };
  
    updateCartCount();
    loadProducts();
    showStars();
  });
  
  
  
  
  
  
  
  
  
  

