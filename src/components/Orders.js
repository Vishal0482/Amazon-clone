import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Orders.css'
import { db } from '../firebase/config';
import DataLoad from '../hooks/DataLoad';
import { useStateValue } from '../hooks/StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Orders({ width }) {
    const [{ basket, user }, dispatch] = useStateValue();
    // const [orders, setOrders] = useState({});
    // const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const { data } = DataLoad("user", user?.uid, "orders");
    // console.log("data ", data);
    if (user != undefined) {
        return (
            <div className='orders'>
                <h1 className="orders-heading">Orders</h1>
                {data.length!=0 ? <div className="orders-products">
                    {
                        data.map((item) => (
                            <>
                                <div className="orders-detail">
                                    <div className="orders-total-amount">
                                        Total Amount: {item.amount}
                                    </div>
                                    <div className="orders-payment-id">
                                        Payment ID: {item.paymentId}
                                    </div>
                                </div>
                                <div className="orders-product-list">
                                    {item.basket.map((value) => (
                                        <div className="orders-product-list-item">
                                            <CheckoutProduct
                                                width={width}
                                                id={value.id}
                                                title={value.title}
                                                image={value.image}
                                                price={value.price}
                                                rating={value.rating}
                                                buttonDisable={true}
                                            />
                                        </div>
                                    )
                                    )}
                                </div>
                            </>
                        ))
                    }

                </div> :
                    <div className="orders-empty">No Product Available</div>}
            </div>
        );
    }
    else {
        return (
            <h3>Redirecting....
                {navigate('/login')}
            </h3>
        )
    }
}

export default Orders;
