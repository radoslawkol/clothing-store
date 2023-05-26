# Clothing Store Ecommerce site
**Figma project design:**
https://www.figma.com/file/5dZsEWvc13uiPYECowWZMG/E-commerce-website?node-id=6%3A29&t=QKCcgFdEghkeICUN-3

**Demo app:** https://clothing-store-rose.vercel.app

## Story
I wanted to create an ecommerce website. I knew that it will be a challenge for me, but also an important experience.
Also, the purpose of this project was to get familiar with Next.js. I think this project enhanced my programming and solving problems skills.
I am aware that code might not be everywhere perfect and there are things to improve, but this project was quite complicated, because I tried a lot of new technologies and I spent some time to create an idea how this website will look and work. It took me a long period of time to complete this, because of school and problems I encountered. Now I am much more aware how ecommerce sites work, but there is still some things to learn.

Embarking on the journey of creating my first ecommerce website was both exciting and challenging. I knew from the start that it would be a valuable learning experience that would push my programming skills to a new level. Additionally, this project provided the perfect opportunity for me to become acquainted with Next.js, a powerful framework for building web applications.

Throughout the development process, I encountered various obstacles and had to find innovative solutions. This experience sharpened my problem-solving skills and expanded my knowledge of web development. This project allowed me to explore new technologies and invest time in creating a functional fullstack website.

As a result, I now have a better understanding of how ecommerce sites operate. However, I recognize that there is still more to learn and room for improvement.


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

## The most important encountered problems 

1. **Using only product IDs**\
When I started building my ecommerce system, I initially relied on the product IDs. However, I soon realized that this approach had its limitations. For example, in the shopping cart, different product variants, such as different sizes or colors, would have the same ID. To address this issue, I researched and implemented something like SKU numbers. SKUs made each cart product unique, allowing for accurate tracking of product variants. This experience taught me the importance of understanding the system I'm building and planning more carefully in the future to avoid frequent logic changes.

2. **Price and discount logic on the client side**\
At some point, I realized that it didn't make sense to rely on the client-side for price calculations. Users could manipulate the price values in the browser, so I redesigned the system to fetch the prices and discounts from the backend. I created a user shopping cart in the database, where the user would send product IDs, quantities, and chosen sizes. The server would then calculate the price and apply relevant discounts based on the discount code stored in the database. This ensured that users couldn't easily manipulate the price or discount values.


## API
#products
Create product - POST: /api/products
