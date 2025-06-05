// Sample product data
const womenProducts = [
  {
    id: 1,
    title: "Floral Summer Dress",
    price: 49.99,
    category: "dresses",
    image: "images/women-dress-1.jpg"
  },
  // Add more products...
];

const menProducts = [
  {
    id: 101,
    title: "Classic Denim Jacket",
    price: 59.99,
    category: "outerwear",
    image: "images/men-jacket-1.jpg"
  },
  // Add more products...
];

// Function to render products
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = products.map(product => `
    <div class="product-card" data-category="${product.category}">
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('women-products')) {
    renderProducts(womenProducts, 'women-products');
  }
  if (document.getElementById('men-products')) {
    renderProducts(menProducts, 'men-products');
  }
  
  // Add filter functionality
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Filter logic will go here
    });
  });
});


//TABS
document.addEventListener('DOMContentLoaded', function () {
  renderProducts(womenProducts, 'women-products');
  renderProducts(menProducts, 'men-products');

  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const gender = btn.getAttribute('data-gender');
      document.getElementById('women-products').style.display = gender === 'women' ? 'grid' : 'none';
      document.getElementById('men-products').style.display = gender === 'men' ? 'grid' : 'none';
    });
  });

  // Default active tab
  document.querySelector('.tab-btn[data-gender="women"]').classList.add('active');
});

// open shop page
document.addEventListener("DOMContentLoaded", () => {
  const shopPage = document.getElementById("shop-page");
  let startY = 0;

  // Swipe up 
  window.addEventListener("touchstart", e => {
    startY = e.touches[0].clientY;
  });

  window.addEventListener("touchend", e => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 100) {
      shopPage.classList.add("open");
    }
  });

  // Optional fallback: click to open
  document.querySelector(".hero .btn")?.addEventListener("click", e => {
    e.preventDefault();
    shopPage.classList.add("open");
  });
});
