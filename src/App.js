import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { useStateValue } from './hooks/StateProvider';
import Login from './auth/Login';
import ResetPassword from './auth/ResetPassword';
import Register from './auth/Register';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';
import Payment from './components/Payment';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders';

const promise = loadStripe("pk_test_51KjpFVSHdcmqS6nRYnDbLBQgAmZ35amkr52mzZRrQOvavxoiviKiPX4QleltovIxHmRUpAqJpDv0WP2gdDbM5Fbg00E0WmnGVY");

function App() {
  const [{ }, dispatch] = useStateValue();
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", e => setWidth(window.innerWidth));
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      // console.log(authUser);

      if (authUser) {
        // logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="checkout" element={<> <Header width={width} /> <Checkout width={width} /> <Footer width={width} /> </>} />
          <Route path="orders" element={<> <Header width={width} /> <Orders width={width} /> <Footer width={width} /> </>} />
          <Route path="/payment" element={<> <Header width={width} /> <Elements stripe={promise} > <Payment width={width} /> </Elements> </>} />
          <Route path="/productList/:productType" element={<> <Header width={width} /> <ProductList /> <Footer width={width} />
          </>} />
          <Route path="/productInfo/:productType/:productId" element={<> <Header width={width} /> <ProductInfo  width={width} /> <Footer width={width} /> </>} />
          <Route path="/" element={<> <Header width={width} /> <Home /> <Footer width={width} /> </>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 PAGE NOT FOUND</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
