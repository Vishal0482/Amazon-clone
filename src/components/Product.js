import React, { useState } from 'react';
import { useStateValue } from '../hooks/StateProvider';
import "../assets/CSS/Product.css";
import { Link } from "react-router-dom";
import Modal from './Modal';
import CloseIcon from '@mui/icons-material/Close';

function Product({ id, title, image, price, rating, bestSeller }) {

    const [{ basket }, dispatch] = useStateValue();
    const [visiblePopup, setVisiblePopup] = useState(false);

    const addToBasket = () => {
        // dispatch data into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        setVisiblePopup(true)
        setTimeout(() => setVisiblePopup(false),1000);
    };

    return (
        <div className="product">
            {visiblePopup && <Modal image={image} title={title} /> }
            <Link to={`/productInfo/${id}`} >
                <div className="product-info">
                    {bestSeller && <> <div className="product-best-seller">Best Seller</div> <div className="product-best-seller-skewd">Best Seller</div> </>}
                    <p className={bestSeller ? 'margin-top product-title' : 'product-title'} >{title}</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                </div>
                <img src={image} alt="" className="product-img" />
            </Link>
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product;
