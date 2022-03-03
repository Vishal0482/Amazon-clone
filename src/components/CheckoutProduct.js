import React from 'react'
import "../assets/CSS/CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

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
                        {title}</p>
                    <div className="checkoutProduct-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                    <div className="checkoutProduct-stock">
                        In Stock
                    </div>
                    <button onClick={removeFromBasket} >Remove from Basket</button>
                </div>
            </div>
            <div className="checkoutProduct-section">
                <strong>${price} </strong>
            </div>
        </div>
    )
}
export default CheckoutProduct;
