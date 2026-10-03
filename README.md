````markdown
# 👗 StyleSense — Fashion Recommendation System

> A modern and responsive fashion recommendation website that helps users discover outfits based on their preferred style, category, and color.

---

## ✨ Overview

**StyleSense** is a frontend-based fashion recommendation website developed using **HTML, CSS, and JavaScript**.

The platform provides an interactive shopping-style experience where users can explore fashion products, search for outfits, apply filters, save their favorite items, and manage products in a shopping cart.

The project focuses on creating a clean, modern, responsive, and user-friendly fashion interface.

---

## 🚀 Features

### 🎯 Fashion Discovery
- Explore different fashion outfits
- Browse products by category
- Select preferred fashion style
- Discover personalized-looking recommendations

### 🔍 Search & Filters
- Search products by name
- Filter by category
- Filter by color
- Filter by fashion style
- Combine multiple filters

### ❤️ Wishlist
- Add products to favorites
- Remove products from favorites
- Dynamic favorite counter

### 🛍️ Shopping Cart
- Add products to cart
- View selected products
- Remove products from cart
- Automatically calculate total price
- Dynamic cart counter

### 📱 Responsive UI
- Desktop friendly
- Tablet compatible
- Mobile responsive
- Modern card-based layout

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Dynamic functionality |
| Google Fonts | Typography |

---

## 📂 Project Structure

```text
Fashion-Recommendation-System/
│
├── index.html          # Main webpage
├── style.css           # Website styling
├── script.js           # Application logic
└── README.md           # Project documentation
````

---

## 🖥️ Main Sections

### 🏠 Home

Introduces the StyleSense platform with a modern hero section and call-to-action button.

### ✨ Style Selection

Users can select their preferred fashion style:

* Casual
* Formal
* Party
* Traditional
* All Styles

### 👗 Recommendations

Displays fashion products dynamically using JavaScript.

Each product includes:

* Product name
* Category
* Color
* Price
* Rating
* Favorite option
* Add-to-cart option

### 🔎 Product Filtering

Users can narrow down products using:

```text
Search
   ↓
Category
   ↓
Color
   ↓
Style
   ↓
Filtered Recommendations
```

### 🛍️ Shopping Cart

The cart allows users to manage selected products and automatically calculates the total price.

---

## ⚙️ How It Works

The application stores product information in a JavaScript array.

Example:

```javascript
{
    id: 1,
    name: "Floral Summer Dress",
    category: "dress",
    style: "casual",
    color: "pink",
    price: 1499,
    rating: 4.8
}
```

When the user selects a filter, JavaScript checks the product properties and displays the matching products.

### Recommendation Flow

```text
        User
          │
          ▼
   Select Preferences
          │
          ▼
 ┌─────────────────────┐
 │ Style / Category
```
