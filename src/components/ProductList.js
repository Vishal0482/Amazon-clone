import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import '../assets/CSS/ProductList.css'
import Product from './Product';
import { db } from '../firebase/config';
import { collection, getDocs } from "firebase/firestore";

function ProductList() {
    const [data, setData] = useState([]);
    let params = useParams();
    // console.log(params.productType)
    const getProducts = async () => {
        const response = await getDocs(collection(db, params.productType));
        let items = [];
        response.docs.forEach(doc => {
            items.push({ ...doc.data(), id: doc.id });
        })
        setData(items);
    };
// console.log(data);
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="product-list">
            <div className="product-list-result-status">
                <div className="product-list-result-count">1-{data.length} of over {data.length} results</div>
                <div className="product-list-sortby">Sort by: Featured </div>
            </div>
            <div className="product-list-heading">RESULTS </div>
            {/* 
            show more
        */}
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
