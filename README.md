# Order-Products-React-App

Welcome to the Order Products React App!

This application allows users to browse and order products from the store. Users can check the available products which are fetched from Firebase backend.
They can add products to their cart by clicking the "Add to Cart" button on the product. They can also remove items from their cart or update the quantities on the cart. When users clicks on "My Cart" button they can see the list of all items currently in their cart, along with the total price.

<img width="1440" alt="Screen Shot 2022-12-16 at 1 15 40 PM" src="https://user-images.githubusercontent.com/95029840/208096241-dcca5067-5328-4aee-bab0-0feeae4578e7.png">



### Project purpose :

In this web application I handled some asynchronous tasks with the help of Redux Toolkit (Sending HTTP requests and similar tasks), also I used two different alternatives of where to put the side effect code because the reducer functions must be pure, side-effect free, and synchronous. The first possible place to put my asynchronous code is directly into the component. The second possible place is inside the action creators functions bacause redux actually has a solution that allows us to perform side effects and run asynchronous tasks as part of this action creators without changing the reducer function. 


Also in this project I used Redux DevTools to inspect and debug my Redux store. Redux DevTools allowed me to view the current state of the store, dispatch actions, and see the changes to the state that result from those actions.


All the logic of toggling the shopping cart, adding items to the cart, removing items from the cart and updating the quantities on the cart is managed and handled by Redux Toolkit. I created a Store folder to setup my Redux store, and multiple slices in two separate files a ui.js file and cart.js file, each file has one slice, one for managing the cart data and one for user interface logic like toggling the shopping cart. Thereafter, I connected my React components to the Redux store using the useSelector and useDispatch hooks in order to access and extract the data I need from the Redux store (create subscriptions to the store), and to dispatch actions in the store.


## Technologies used :

- React
-  React redux 
-  Redux Toolkit 
-  Redux DevTools


## Prerequisites :

Before you can run this app, you will need to have the following software installed on your machine:

- Node.js
- npm (which comes with Node)

## Setting up the app :



- Clone the repository: git clone https://github.com/[USERNAME]/react-product-ordering.git
- Navigate to the project directory: cd react-product-ordering
- Install all dependencies: run npm install
- Install Redux Toolkit: run npm install @reduxjs/toolkit
- Install React Redux: run npm install react-redux
- Start the development server: run npm start


This will install all necessary dependencies and start the development server. The app will be available at http://localhost:3000 in your browser.

