import React from 'react';
import "../assets/CSS/Footer.css";

function Footer({ width }) {

    const listItems = [
        {
            heading: 'Get to Know Us',
            items: [
                "Careers",
                "Blog",
                "About Amazon",
                "Investor Relations",
                "Amazon Device",
                "Amazon Science"
            ]
        },
        {
            heading: 'Make Money with Us',
            items: [
                "Sell products on Amazon",
                "Sell on Amazon Business",
                "About Amazon",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hub",
                "See More Make Money with Us"
            ]
        },
        {
            heading: 'Amazon Payment Products',
            items: [
                "Amazon Business Card",
                "Shop with Points",
                "Reload Your Balance",
                "Amazon Currency Converter"
            ]
        },
        {
            heading: 'Let Us Help You',
            items: [
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
                "Returns & Replacements",
                "Manage Your Content and Devices",
                "Amazon Assistant",
                "Help"
            ]
        }
    ];

    const listItemsMobile = [
        {
            items: [
                "Your Amazon.in",
                "Amazon Pay",
                "Whish List",
                "your Account",
                "Return",
                "Customer Service"
            ]
        },
        {
            items: [
                "Your Order",
                "Amazon App Download",
                "Find a whish list",
                "Your recently viewed items",
                "Sell"
            ]
        }
    ];
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
            {!(width <= 640) ?
                <div className="footer-container">
                    {listItems.map((data, index) => {
                        return (
                            <div className="footer-nav">
                                <div className="footer-nav-heading">
                                    {data.heading}
                                </div>
                                <ul className="footer-nav-items">
                                    {data.items.map((item) => (
                                        <li className="footer-item">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div> :
                <div className="footer-container">
                    {listItemsMobile.map((data, index) => {
                        return (
                            <ul className="footer-nav-items">
                                {data.items.map((item) => (
                                    <li className="footer-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )
                    })}
                </div>}
        </div>
    )
}

export default Footer;
