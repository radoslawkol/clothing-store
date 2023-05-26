# Clothing Store Ecommerce site
**Figma project design:**
https://www.figma.com/file/5dZsEWvc13uiPYECowWZMG/E-commerce-website?node-id=6%3A29&t=QKCcgFdEghkeICUN-3

**Demo app:** https://clothing-store-rose.vercel.app

## Story

Embarking on the journey of creating my first ecommerce website was both exciting and challenging. I knew from the start that it would be a valuable learning experience that would push my programming skills to a new level. Additionally, this project provided the perfect opportunity for me to become acquainted with Next.js, a powerful framework for building web applications.

Throughout the development process, I encountered various obstacles and had to find innovative solutions. This experience sharpened my problem-solving skills and expanded my knowledge of web development. This project allowed me to explore new technologies and invest time in creating a functional fullstack website. As a result, I now have a better understanding of how ecommerce sites operate. However, I recognize that there is still more to learn and room for improvement.
<br>

## Screenshots

<img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120662/github%20docs/clothes-shop/clothesshop-hero_ohmxtk.png" width=500 height=300><img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120663/github%20docs/clothes-shop/clothesshop-man_bxpv0l.png" width=500 height=300><img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120661/github%20docs/clothes-shop/clothesshop-search_sdqcn4.png" width=500 height=300><img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120661/github%20docs/clothes-shop/clothesshop-detail_g2cm7z.png" width=500 height=300><img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120660/github%20docs/clothes-shop/clothesshop-bag_b2iige.png" width=500 height=300><img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120661/github%20docs/clothes-shop/clothesshop-favourites_ohegmw.png" width=500 height=300><img src="https://res.cloudinary.com/detfhw9ll/image/upload/v1685120662/github%20docs/clothes-shop/clothesshop-orders_wyf8sk.png" width=500 height=300>

<br>

## Main Features
- Displaying products by different categories and subcategories
- Search product by name
- Create a user account
- Logging in to account
- Paypal payments
- Making and order
- Shopping cart
- Shipping cart
- Changing password, email, name
- Writing comments and review products
- Adding favourite products
- Displaying orders' list
- Finding the same product in different colour
- Product's photos carousel
- Discount codes
- Recent searched products

<br>

## Used Technologies
- react
- next.js
- tailwindcss
- mongoose
- mongoDB
- figma
- paypal api
- redux toolkit
- react-hook-form
- axios
- bcrypt
- jsonwebtoken
- js-cookie
- tough-cookie
- yup
- react-rating-stars-component
- heroicons
- react-toastify
- react-responsive
- slugify
- jest
- cypress
- react-testing-library

<br>

## The most important encountered problems 

1. **Using only product IDs**\
When I started building my ecommerce system, I initially relied on the product IDs. However, I soon realized that this approach had its limitations. For example, in the shopping cart, different product variants, such as different sizes or colors, would have the same ID. To address this issue, I researched and implemented something like SKU numbers. SKUs made each cart product unique, allowing for accurate tracking of product variants. This experience taught me the importance of understanding the system I'm building and planning more carefully in the future to avoid frequent logic changes.

2. **Price and discount logic on the client side**\
At some point, I realized that it didn't make sense to rely on the client-side for price calculations. Users could manipulate the price values in the browser, so I redesigned the system to fetch the prices and discounts from the backend. I created a user shopping cart in the database, where the user would send product IDs, quantities, and chosen sizes. The server would then calculate the price and apply relevant discounts based on the discount code stored in the database. This ensured that users couldn't easily manipulate the price or discount values.

<br>

## API Endpoints

<br>

### Products
- Create a product - `POST /api/products`
- Get products - `GET /api/products`
- Get products with filters - `GET /api/gender=woman&category=accessories&productCategory=necklace`
- Get a product - `GET /api/products/product-slug`
- Add to search history `PATCH /api/products/addToSearchHistory`
- Get recent searches `GET /api/products/getSearchHistory`


### Users
- Update personal data - `PATCH /api/users/:id`
- Change password - `PATCH /api/users/changePassword`
<br>

### Authentication
- Login - `POST /api/auth/login`
- Register - `POST /api/auth/register`
<br>

### Shopping cart
- Create a shopping cart - `POST /api/cart`
- Get a shopping cart - `GET /api/cart`
<br>

### Comments 
- Create a comment - `POST /api/comments`
<br>

### Discounts
- Create a discount code - `POST /api/discounts`
- Verify a discount code - `GET /api/discounts?code=${codeNumber}`
- Disactivate a discount code - `PATCH /api/discounts`
- Delete a discount code - `DELETE /api/discounts`
<br>

### Orders
- Create an order - `POST /api/orders`
- Get orders - `GET /api/orders`
<br>

### Favourites products
- Add or delete favourite product `PATCH /api/favourites`
<br>

### Paypal
- Provide data to transaction - `/api/keys/paypal`
