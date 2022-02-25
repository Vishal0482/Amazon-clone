import React from 'react';
import "../assets/CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getAuth, signOut } from "firebase/auth";
import NavigationBar from './NavigationBar';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const auth = getAuth();

    var arr = user?.email.split("@") || "guest@gmail.com".split("@");

    const handleAuthenticaton = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    console.log("user signed out");
                })
                .catch((error) => {
                    console.log("error", error);
                });
        }
    }

    return (
        <>
            <div className="header">
                <Link to="/">
                    <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                </Link>
                <div className="header-search">
                    <input className="header-search-input" type="text" />
                    <SearchIcon className="header-search-icon " />
                </div>

                <div className="header-nav">
                    <Link to={'/login'}>
                        <div onClick={handleAuthenticaton} className="header-option">
                            <span className="header-option-line-one">Hello {user ? arr[0] : 'Guest'} </span>
                            <span className="header-option-line-two">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <div className="header-option">
                        <span className="header-option-line-one">Returns</span>
                        <span className="header-option-line-two">& Orders</span>
                    </div>
                    <div className="header-option">
                        <span className="header-option-line-one">Your</span>
                        <span className="header-option-line-two">Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className="header-option-basket">
                            <ShoppingBasketIcon />
                            <span className="header-option-line-two header-basket-count"> {basket?.length} </span>
                        </div>
                    </Link>
                </div>
            </div>
            <NavigationBar />
        </>
    )
}

export default Header;
