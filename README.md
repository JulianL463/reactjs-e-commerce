
![BuyIT Logo](https://iili.io/MN1zqN.png)
## ReactJS E-commerce

![GitHub last commit](https://img.shields.io/github/last-commit/JulianL463/reactjs-e-commerceJulianLopez?style=plastic)

Final project for the RactJS course of Coder House.

Fictitious electronics e-commerce.

## Description

- The product data comes from a Firebase database that is resolved through promises when mounting the component with the useEffect Hook. Components are not rendered until the data has been successfully retrieved from Firebase.

- React-Router-Dom is used to simulate page changes while actualy being an SPA (Single Page Application).

- At the end of the purchase it gets registered in another firebase collection and the stock from the original is deducted.

- It has the option to register and/or sign in with an email and a password, which is authenticated through firebase authentication service.

## How to run

Use the package manager [npm](https://pip.pypa.io/en/stable/) to run the project.

```bash
npm start
```

## Usage

![Navigation demo](https://iili.io/Ww66CJ.gif)

## Dependencies

![styled components](https://img.shields.io/badge/styled--components-5.3.3-blue)   ![React icons](https://img.shields.io/badge/React--icons-4.3.1-blue) ![React router dom](https://img.shields.io/badge/React--router--dom-6.3.0-blue) ![Firebase](https://img.shields.io/badge/Firebase-9.6.11-blue) ![hotToast](https://img.shields.io/badge/react--hot--toast-2.2.0-blue)