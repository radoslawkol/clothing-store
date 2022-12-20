# Clothing Store Ecommerce site
**Figma project design:**
https://www.figma.com/file/5dZsEWvc13uiPYECowWZMG/E-commerce-website?node-id=6%3A29&t=QKCcgFdEghkeICUN-3

## Story
I wanted to create an ecommerce website. I knew that it will be a challenge for me, but also an important experience.
Also, the purpose of this project was to get familiar with Next.js. I think this project enhanced my programming and solving problems skills.
I am aware that code might not be everywhere perfect and there are things to improve, but this project was quite complicated, because I tried a lot of new technologies and I spent some time to create an idea how this website will look and work. It took me a long period of time to complete this, because of school and problems I encountered. Now I am much more aware how ecommerce sites work, but there is still some things to learn.

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
1. **Using only product's id.**\
I wasn't aware how ecommerce system should be like. Firstly, I based on products' ids, which wasn't great, because e.g in shopping cart product could have the same id, but different size chose by user and color, so I had to introduced SKU numbers to make each cart product unique. I read about SKU on the Inthernet and I applied this to every product. SKU is unique for the same products, but with different color or size. I realised how important is a knowledge about what you want to build. In future I will plan app more carefully and do more reaserch to not change logic so many times. 

2. **Price and discounts code based on client side**\
After some time I realised that it's a nonsense if we pass price value from totals calculated on client side. User could pass any value, which he wanted, so I tried in order to price was comming from backend and discount as well. So I created user shopping cart in datebase. User sends only products ids, amount of particular products and size he chose. Then we calculate price on a server and discounts if discount code is relevant with this in db. If user pays, paypal function fetch cart from backend and pass it through it's API. So user cannot easily overwrite his price and discount.

3. I has stopped implementing testing, because I realised that this project is to complex to test for a begginner. I firstly try create testing on smaller project and maybe in the future I will implement them also to this project. I wanted have tests to every components at the beginning, but I with time it slowed me down. So I left this idea and focused on site functionality. I know how test are important, but I think that I should practise them on easier projects first, and learn more.


## API
#products
Create product - POST: /api/products
