import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/CSS/ProductInfo.css';

function ProductInfo({ width }) {
    const param = useParams();
    const [visible, setVisible] = useState(false);
    // console.log(visible);
    // console.log(param.productId);
    function showProductInfo() {
        return (
            <>
                <div className="product-info-heading">
                    CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides and Glycerin | 16 Fluid Ounce
                </div>
                <div className="product-info-rating">
                    <span>Rating</span>
                    {Array(5)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <div className="product-info-price">
                    Price: <span>$12.91</span>
                    <p>$23.69 Shipping & Import Fees Deposit to India</p>
                </div>
            </>
        )
    }

    function showproductAbout() {
        return (
            <div className="product-info-about">
                <h4>About this item</h4>
                <p>[ DAILY FACE WASH ] Gentle cleansing lotion with hyaluronic acid, ceramides, and glycerin to help hydrate skin without stripping moisture. Removes face makeup, dirt, and excess oil, provides 24-hour hydration and leaves a moisturized, non-greasy feel.
                </p>
                <p>[ NON-FOAMING CLEANSER ] Moisturizing facial cleanser with a lotion-like consistency feels smooth as it cleanses, even on sensitive, dry skin. Paraben-free, fragrance-free, soap-free, non-comedogenic, non-drying, and non-irritating. Certified by the National Eczema Association</p>
                <p>[ ESSENTIAL CERAMIDES ] Ceramides are found naturally in the skin and make up 50% of the lipids in the skin barrier. All CeraVe products are formulated with three essential ceramides (1, 3, 6-II) to help restore and maintain the skin’s natural barrier</p>
            </div>
        )
    }

    return (
        <div className={(width <= 768) ? "product-info product-info-small-size" : "product-info"}>
            {(width <= 768) && <div className="product-info-main-section">{showProductInfo()}</div>}
            <div className="product-info-main">
                <div className="product-info-main-section">
                    <img className="product-info-image" src="https://m.media-amazon.com/images/I/51DbQev1thL._SX425_.jpg" alt="" />
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
                            Price: <span>$12.91</span>
                            <p>Delivery March 25 - April 11</p>
                        </div>
                        <div className="product-info-stock">
                            In Stock
                        </div>
                        <div className="product-info-button">
                            <button className="button-add-to-cart">Add to cart</button>
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