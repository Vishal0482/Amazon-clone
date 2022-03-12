import React from 'react';
import "../assets/CSS/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

function Checkout({ width }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div>
            <div className="checkout">
                <div className="checkout-left">
                    {!(width <= 760) && <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />}

                    {basket.length === 0 ? (
                        <div className="checkout-empty-basket">
                            <div className="checkout-flex-box">
                                <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
                                <div className="checkout-info">
                                    <h2>Your Amazon Basket is empty</h2>
                                    <p>Shop today's deal</p>
                                    {!user && (<div>
                                        <button className="checkout-sign-in" onClick={e => navigate('/login')} >Sign in to your account</button>
                                        <button className="checkout-sign-up" onClick={e => navigate('/register')} > Sign up now</button>
                                    </div>)}
                                </div>
                            </div>
                            <div className="checkout-empty-box"></div>
                            <div className="checkout-info-text"> The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's
                                most recent price.
                                <p>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                            </div>
                        </div>) : (
                        <div className="checkout-shopping-cart" >
                            <h2 className="checkout-title">
                                Shopping Cart
                                {!(width <= 640) && <p className="checkout-price">
                                    Price
                                </p>}
                            </h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    width={width}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>)}
                    {!(basket.length === 0) && <Subtotal showButton={true} />}
                </div>

                {basket.length !== 0 ? (
                    <div className="checkout-right">
                        <Subtotal />
                    </div>
                ) : ("")}
            </div>
        </div>
    )
}

export default Checkout;
