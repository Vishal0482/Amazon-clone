import React from 'react'
import { useParams, Link } from "react-router-dom";
import '../assets/CSS/ProductList.css'
import Product from './Product';
import DataLoad from '../hooks/DataLoad';

function ProductList() {
    let params = useParams();
    const {data} = DataLoad(params.productType);

    return (
        <div className="product-list">
            <div className="product-list-result-status">
                <div className="product-list-result-count">1-{data.length} of over {data.length} results</div>
                <div className="product-list-sortby">Sort by: Featured </div>
            </div>
            <div className="product-list-heading">RESULTS </div>
           
            <div className="product-list-row">
                {
                    data.map((index) =>
                    <>
                    <Link to={`/productInfo/${index.id}`} >
                        <Product
                            id={index.id}
                            title={index.title}
                            price={index.price}
                            image={index.image}
                            rating={index.rating}
                            bestSeller={index.bestSeller} />
                    </Link> 
                    </>
                    )
                }
            </div>
        </div>
    );
}

export default ProductList;
