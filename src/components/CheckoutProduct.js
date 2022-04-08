import React from 'react'
import "../assets/CSS/CheckoutProduct.css";
import { useStateValue } from '../hooks/StateProvider';

function CheckoutProduct({ width, id, title, image, price, rating, buttonDisable }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <div className="checkoutProduct-section">
                <img className="checkoutProduct-image" src={image} alt="" />
            </div>
            <div className="checkoutProduct-section">
                <div className="checkoutProduct-info">
                    <p className="checkoutProduct-title">
                        {title} </p>
                    {(width <= 640) && <span>....</span>}
                    {(width <= 640) && <div className="checkoutProduct-section">
                        <strong>${price} </strong>
                    </div>}
                    <div className="checkoutProduct-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                    {!buttonDisable &&<div className="checkoutProduct-stock">
                        In Stock
                    </div>}
                    {!buttonDisable && <div>
                        {!(width <= 640) && <button className="checkoutProduct-remove" onClick={removeFromBasket} >Remove from Basket</button>}
                        {(width <= 640) && <button className="checkoutProduct-delete" onClick={removeFromBasket} >Delete</button>}
                    </div>}
                </div>
            </div>
            {!(width <= 640) && <div className="checkoutProduct-section">
                <strong>${price} </strong>
            </div>}
        </div>
    )
}
export default CheckoutProduct;
