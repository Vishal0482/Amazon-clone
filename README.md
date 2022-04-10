# Amazon clone with React and firebase

This project was created using [Create React App](https://github.com/facebook/create-react-app).

## Install all necessary library using following command:

For installing all library:

### `npm install` 

## Install libraries one by one: 

### `npm install firebase`
### `npm i -g firebase-tools`
### `npm i material-ui/core material-ui/icon`
### `npm i react-router-dom`
### `npm i @stripe/react-stripe-js`
### `npm i @stripe/stripe-js`
### `npm i react-currency-format`
### `npm i axios`

## Run project:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build project:

you can run following command to build project:

### `npm run build`

7## Deploy on Firebase Hosting:

### `firebase login`
### `firebase init`
### `firebase deploy`

## For setting up Stripe payment we need express server

Initialize index.js
### `npm init -y`

Run following command in backend Folder to install libraries:

### `npm i stripe express cors dotenv body-parser`

Run backend:
### `npm start`

## Functionality

1. Sidebar
2. Image Slider
3. Authentication\
    i. Register\
    ii. Login\
    iii. Sign Out\
    iv. Reset Password
4. product Information
5. Add to basket
6. Remove from basket
7. Checkout
8. Payment
9. Orders