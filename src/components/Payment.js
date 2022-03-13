import React from 'react'
import '../assets/CSS/Payment.css';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../hooks/StateProvider';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    // const stripe = useStripe();
    // const elements = useElemets();

    const handleSubmit = e =>{
        // submit
    };
    
    const handleChange = e =>{
        // submit
    }; 

    return (
        <div className="payment">
            <h1>Checkout (<Link to="/checkout"> {basket?.length } items</Link> )</h1>

            <div className="payment-container">
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p> {user?.email} </p>
                        <p>123 React soc</p>
                        <p>Node Js road, javascript </p>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        { basket.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        )) }
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        {/* npm i @stripe/stripe-js */}
                        {/* npm i @stripe/react-stripe-js */}

                        <form onSubmit={handleSubmit} >
                            {/* <CardElement onChange={handleChange} /> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
