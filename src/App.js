import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './components/StateProvider';
import ResetPassword from './components/ResetPassword';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase/config';

function App() {
  initializeApp(firebaseConfig);
  const [{ }, dispatch] = useStateValue();
  const auth = getAuth();
  useEffect(() => {
   onAuthStateChanged( auth, (authUser) => {
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
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="checkout" element={<> <Header /> <Checkout /> </>} />
          <Route path="/" element={<> <Header /> <Home /> </>} />
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
    </BrowserRouter>
  );
}

export default App;
