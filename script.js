```javascript
/* =========================
   PRODUCT DATA
========================= */

const products = [

    {
        id: 1,
        name: "Floral Summer Dress",
        category: "dress",
        style: "casual",
        color: "pink",
        price: 1499,
        rating: 4.8,
        emoji: "👗"
    },

    {
        id: 2,
        name: "Classic White Shirt",
        category: "top",
        style: "formal",
        color: "white",
        price: 999,
        rating: 4.6,
        emoji: "👔"
    },

    {
        id: 3,
        name: "Blue Denim Jeans",
        category: "jeans",
        style: "casual",
        color: "blue",
        price: 1799,
        rating: 4.7,
        emoji: "👖"
    },

    {
        id: 4,
        name: "Elegant Black Dress",
        category: "dress",
        style: "party",
        color: "black",
        price: 2299,
        rating: 4.9,
        emoji: "👗"
    },

    {
        id: 5,
        name: "Pink Casual Top",
        category: "top",
        style: "casual",
        color: "pink",
        price: 799,
        rating: 4.5,
        emoji: "👚"
    },

    {
        id: 6,
        name: "Red Party Dress",
        category: "dress",
        style: "party",
        color: "red",
        price: 2499,
        rating: 4.8,
        emoji: "👗"
    },

    {
        id: 7,
        name: "Traditional Silk Saree",
        category: "saree",
        style: "traditional",
        color: "red",
        price: 2999,
        rating: 4.9,
        emoji: "🥻"
    },

    {
        id: 8,
        name: "Blue Casual Shirt",
        category: "top",
        style: "casual",
        color: "blue",
        price: 899,
        rating: 4.4,
        emoji: "👕"
    },

    {
        id: 9,
        name: "Black Straight Jeans",
        category: "jeans",
        style: "casual",
        color: "black",
        price: 1599,
        rating: 4.6,
        emoji: "👖"
    },

    {
        id: 10,
        name: "Pink Designer Kurti",
        category: "kurti",
        style: "traditional",
        color: "pink",
        price: 1299,
        rating: 4.7,
        emoji: "👗"
    },

    {
        id: 11,
        name: "Formal Black Blazer",
        category: "top",
        style: "formal",
        color: "black",
        price: 2799,
        rating: 4.8,
        emoji: "🧥"
    },

    {
        id: 12,
        name: "White Summer Dress",
        category: "dress",
        style: "casual",
        color: "white",
        price: 1699,
        rating: 4.5,
        emoji: "👗"
    }

];


/* =========================
   VARIABLES
========================= */

const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const colorFilter =
    document.getElementById("colorFilter");

const favoriteCount =
    document.getElementById("favoriteCount");

const cartCount =
    document.getElementById("cartCount");

const cartModal =
    document.getElementById("cartModal");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");


let selectedStyle = "all";

let favorites = [];

let cart = [];


/* =========================
   DISPLAY PRODUCTS
========================= */

function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <div class="no-products">
                <h3>No outfits found 😔</h3>
                <p>Try another search or filter.</p>
            </div>
        `;

        return;
    }


    productList.forEach(product => {

        const isFavorite =
            favorites.includes(product.id);


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">
                ${product.emoji}
            </div>

            <button
                class="favorite ${isFavorite ? "active" : ""}"
                onclick="toggleFavorite(${product.id})"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-rating">
                    ★ ${product.rating}
                </div>

                <div class="product-bottom">

                    <span class="price">
                        ₹${product.price}
                    </span>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Add
                    </button>

                </div>

            </div>

        `;


        productContainer.appendChild(card);

    });

}


/* =========================
   FILTER PRODUCTS
========================= */

function filterProducts() {

    const searchValue =
        searchInput.value.toLowerCase();

    const categoryValue =
        categoryFilter.value;

    const colorValue =
        colorFilter.value;


    const filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchValue);


            const matchesCategory =
                categoryValue === "all" ||
                product.category === categoryValue;


            const matchesColor =
                colorValue === "all" ||
                product.color === colorValue;


            const matchesStyle =
                selectedStyle === "all" ||
                product.style === selectedStyle;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesColor &&
                matchesStyle
            );

        });


    displayProducts(filteredProducts);
}


/* =========================
   STYLE BUTTONS
========================= */

const styleButtons =
    document.querySelectorAll(".style-btn");


styleButtons.forEach(button => {

    button.addEventListener("click", () => {

        styleButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedStyle =
            button.dataset.style;

        filterProducts();

    });

});


/* =========================
   SEARCH
========================= */

searchInput.addEventListener(
    "input",
    filterProducts
);


/* =========================
   CATEGORY FILTER
========================= */

categoryFilter.addEventListener(
    "change",
    filterProducts
);


/* =========================
   COLOR FILTER
========================= */

colorFilter.addEventListener(
    "change",
    filterProducts
);


/* =========================
   FAVORITES
========================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    favoriteCount.textContent =
        favorites.length;


    filterProducts();
}


/* =========================
   ADD TO CART
========================= */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );


    cart.push(product);


    updateCart();

    alert(
        `${product.name} added to cart 🛍️`
    );
}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    cartCount.textContent =
        cart.length;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;


    cart.forEach((product, index) => {

        total += product.price;


        const item =
            document.createElement("div");

        item.className =
            "cart-item";


        item.innerHTML = `

            <div>
                ${product.emoji}
                ${product.name}
            </div>

            <div>

                ₹${product.price}

                <button
                    onclick="removeFromCart(${index})"
                    style="
                        border:none;
                        background:none;
                        cursor:pointer;
                        margin-left:8px;
                    "
                >
                    ❌
                </button>

            </div>

        `;


        cartItems.appendChild(item);

    });


    cartTotal.textContent = total;
}


/* =========================
   REMOVE FROM CART
========================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* =========================
   CART MODAL
========================= */

document
    .getElementById("cartBtn")
    .addEventListener("click", () => {

        cartModal.classList.add("show");

    });


document
    .getElementById("closeCart")
    .addEventListener("click", () => {

        cartModal.classList.remove("show");

    });


cartModal.addEventListener(
    "click",
    event => {

        if (event.target === cartModal) {

            cartModal.classList.remove("show");

        }

    }
);


/* =========================
   CATEGORY CARDS
========================= */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.dataset.category;


        if (category === "traditional") {

            selectedStyle = "traditional";

            styleButtons.forEach(btn => {

                btn.classList.remove("active");

                if (
                    btn.dataset.style === "traditional"
                ) {
                    btn.classList.add("active");
                }

            });

        } else {

            categoryFilter.value =
                category;

        }


        document
            .getElementById("recommendations")
            .scrollIntoView({
                behavior: "smooth"
            });


        filterProducts();

    });

});


/* =========================
   INITIAL DISPLAY
========================= */

displayProducts(products);
```
