import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import '../assets/CSS/ProductList.css'
import Product from './Product';
import DataLoad from '../hooks/DataLoad';
import { useStateValue } from '../hooks/StateProvider';

function ProductList() {
    let params = useParams();
    const {data} = DataLoad("home-card",params.productType,"products");
    // console.log(data);
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: "SET_PRODUCT_LIST",
            item: data,
        })
    },[data])

    const [selected, setSelected] = useState();
    useEffect(() =>{
        if(selected === "price"){
            data.sort(function(a, b){return a.price - b.price});
        }
        if(selected === "rating"){
            data.sort(function(a, b){return a.rating - b.rating});
        }
    }, [selected])

    return (
        <div className="product-list">
            <div className="product-list-result-status">
                <div className="product-list-result-count">1-{data.length} of over {data.length} results</div>
                <div className="product-list-sortby">Sort by: 
                    <select name="sort" className="product-sort" onChange={e =>setSelected(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="rating">Rating</option>
                        <option value="price">Price</option>
                    </select>
                </div>
            </div>
            <div className="product-list-heading">RESULTS </div>
           
            <div className="product-list-row">
                {
                    data.map((index) =>
                        <Product
                            id={index.id}
                            title={index.title}
                            price={index.price}
                            image={index.image}
                            rating={index.rating}
                            bestSeller={index.bestSeller} />
                    )
                }
            </div>
        </div>
    );
}

export default ProductList;
