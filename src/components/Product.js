import React from 'react';
import { useStateValue } from './StateProvider';
import "../assets/CSS/Product.css";

function Product({ id, title, image, price, rating, bestSeller}) {

    const [{ basket }, dispatch] = useStateValue();
// console.log(basket);
    const addToBasket = () =>{
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
    };

    return (
        <div className="product">
            <div className="product-info">
            {bestSeller && <> <div className="product-best-seller">Best Seller</div> <div className="product-best-seller-skewd">Best Seller</div> </>}
                <p className={bestSeller && 'margin-top'} >{title}</p>
                <p className="product-price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>⭐</p>  
                    ))}
                </div>
            </div>
             <img src={image} alt="" />

             <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product;
