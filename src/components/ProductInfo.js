import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/CSS/ProductInfo.css';
import { useStateValue } from '../hooks/StateProvider';
import Modal from "./Modal";

function ProductInfo({ width }) {
    const param = useParams();
    const [visible, setVisible] = useState(false);
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [{ basket, productList }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch data into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                rating: product.rating,
            },
        });
        setVisiblePopup(true)
        setTimeout(() => setVisiblePopup(false), 1000);
    };

    if(visible){
        setTimeout(() => setVisible(false), 2000);
    }

    let product;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id === param.productId) {
            product = productList[i];
        }
    }

    function showProductInfo() {
        return (
            <>
                <div className="product-info-heading">
                    {product.title}
                </div>
                <div className="product-info-rating">
                    <span>Rating</span>
                    {Array(product.rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <div className="product-info-price">
                    Price: <span>{product.price}</span>
                    <p>$23.69 Shipping & Import Fees Deposit to India</p>
                </div>
            </>
        )
    }

    function showproductAbout() {
        return (
            <div className="product-info-about">
                <h4>About this item</h4>
                {product.about.map((data) => (
                    <p>{data}</p>
                ))}
            </div>
        )
    }

    return (
        <div className={(width <= 768) ? "product-info product-info-small-size" : "product-info"}>

            {visiblePopup &&  <Modal image={product.image} title={product.title} /> }
            
            {(width <= 768) && <div className="product-info-main-section">{showProductInfo()}</div>}
            <div className="product-info-main">
                <div className="product-info-main-section">
                    <img className="product-info-image" src={product.image} alt="" />
                </div>
                <div className="product-info-main-section">
                    {!(width <= 768) && <>
                        {showProductInfo()}
                        {showproductAbout()}
                    </>}
                </div>
                <div className="product-info-main-section">
                    <div className="product-info-box">
                        <div className="product-info-price">
                            Price: <span>{product.price}</span>
                            <p>Delivery March 25 - April 11</p>
                        </div>
                        <div className="product-info-stock">
                            In Stock
                        </div>
                        <div className="product-info-button">
                            <button className="button-add-to-cart" onClick={addToBasket}>Add to cart</button>
                            <button className="button-buy-now">Buy Now</button>
                        </div>
                        <div className="product-info-secure">
                            <LockIcon style={{ fontSize: "20px" }} className="lock-icon" /> Secure transaction
                        </div>
                        <div className="product-info-amazon">
                            <p><span>Ships from</span> Amazon.com</p>
                            <p><span>Sold by</span> Amazon.com</p>
                        </div>
                        <div className="product-info-policy" onMouseOver={e => setVisible(true)}>
                            Return policy: <span> Eligible for <br /> Return, Refund or Replacement</span>
                            {visible && <div className="product-info-policy-popup" >
                                <div>This item can be returned in its original condition for a full refund or replacement within 30 days of receipt.
                                    <p>Read full return policy</p></div>
                                <div> <CloseIcon style={{ fontSize: "20px" }} onClick={e => setVisible(false)} /> </div>
                            </div>}
                        </div>
                        <div className="product-info-gift">
                            <input type="checkbox" /> <span>Add a gift receipt for easy returns</span>
                        </div>
                    </div>
                </div>
            </div>
            {(width <= 768) && showproductAbout()}
            <div className="product-info-question">
                <h2>Have a question?</h2>
                <p>Find answers in product info, Q&As, reviews</p>
                <span>
                    <SearchIcon /><input type="text" placeholder="Type your keyword or question" />
                </span>
            </div>
        </div>
    )
}

export default ProductInfo;