import React from 'react';
import "../assets/CSS/Footer.css";

function Footer() {

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="footer" >
            <div className="back-to-top" onClick={handleBackToTop} >
                Back To Top
            </div>
            <div className="footer-container">
                <div className="footer-nav">
                    <div className="footer-nav-heading">
                    Get to Know Us
                    </div>
                    <ul className="footer-nav-items">
                        <li className="footer-item">Careers</li>
                        <li className="footer-item">Blog</li>
                        <li className="footer-item">About Amazon</li>
                        <li className="footer-item">Investor Relations</li>
                        <li className="footer-item">Amazon Device</li>
                        <li className="footer-item">Amazon Science</li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <div className="footer-nav-heading">
                    Make Money with Us
                    </div>
                    <ul className="footer-nav-items">
                        <li className="footer-item">Sell products on Amazon</li>
                        <li className="footer-item">Sell on Amazon Business</li>
                        <li className="footer-item">About Amazon</li>
                        <li className="footer-item">Sell apps on Amazon</li>
                        <li className="footer-item">Become an Affiliate</li>
                        <li className="footer-item">Advertise Your Products</li>
                        <li className="footer-item">Self-Publish with Us</li>
                        <li className="footer-item">Host an Amazon Hub</li>
                        <li className="footer-item">›See More Make Money with Us</li>
                    </ul>
                </div>
                 <div className="footer-nav">
                    <div className="footer-nav-heading">
                    Amazon Payment Products
                    </div>
                    <ul className="footer-nav-items">
                        <li className="footer-item">Amazon Business Card</li>
                        <li className="footer-item">Shop with Points</li>
                        <li className="footer-item">Reload Your Balance</li>
                        <li className="footer-item">Amazon Currency Converter</li>
                    </ul>
                </div> 
                <div className="footer-nav">
                    <div className="footer-nav-heading">
                    Let Us Help You
                    </div>
                    <ul className="footer-nav-items">
                        <li className="footer-item">Amazon and COVID-19</li>
                        <li className="footer-item">Your Account</li>
                        <li className="footer-item">Your Orders</li>
                        <li className="footer-item">Shipping Rates & Policies</li>
                        <li className="footer-item">Returns & Replacements</li>
                        <li className="footer-item">Manage Your Content and Devices</li>
                        <li className="footer-item">Amazon Assistant</li>
                        <li className="footer-item">Help</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
