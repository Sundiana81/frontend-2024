const API_URL = 'https://dummyjson.com/products';

// Функция для получения данных из API
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.products; // Возвращаем массив продуктов
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Функция для создания карточек продуктов
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.images[0]}" alt="${product.title}">
            <div class="card-content">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
            </div>
        </div>
    `;
}

// Функция для рендеринга карточек продуктов
async function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    const products = await fetchProducts();
    
    if (products && products.length > 0) {
        productGrid.innerHTML = products.map(createProductCard).join('');
    } else {
        productGrid.innerHTML = '<p>Failed to load products.</p>';
    }
}

// Вызов рендера при загрузке страницы
document.addEventListener('DOMContentLoaded', renderProducts);
