import React, { useEffect, useState } from 'react'
import '../assets/CSS/Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../hooks/StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../hooks/reducer';
import axios from 'axios';
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

function Payment({ width }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const { err, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!err) {
            try {
                const { id ,created } = paymentMethod;
            //    console.log("id > ",id)
                // const response = await axios.post("http://localhost:4000/payment", {
                const response = await axios.post("https://amazon-clone-payment-server.herokuapp.com/payment", {
                    amount: Math.round(getBasketTotal(basket) * 100),
                    id
                })
                // console.log("respones > ",response);
                if (response.data.success) {
                    console.log("Successful payment")
                    setSucceeded(true);
                    setError(null);
                    setProcessing(false);
                    
                    await setDoc(doc (db, "user", user.uid, "orders", id), {
                        paymentId: id,
                        basket: basket,
                        amount: getBasketTotal(basket),
                        created: created
                    }, { merge: true })

                    dispatch({
                        type: 'EMPTY_BASKET'
                    })
                    navigate('/orders', { replace: true });
                }
            }
            catch (err) {
                console.log("Error", err)
            }
        }
        else {
            console.log(err.message);
        }
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };
    if (user != undefined) {
    return (
        <div className="payment">
            <h2>Checkout (<Link to="/checkout"> {basket?.length} items</Link> )</h2>

            <div className="payment-container">
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p> {user?.email} </p>
                       
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
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
                            <CardElement onChange={handleChange} />

                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>
                                        Order Total: {value}
                                    </h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeprator={true}
                                prefix={"$"}
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )}
    else {
        return (
            <h3>Redirecting....
                {navigate('/login')}
            </h3>
        )
    }
}

export default Payment;
