import React from 'react'
import { useParams } from 'react-router-dom';

function ProductInfo() {
    const param = useParams();
    // console.log(param.productId);
    return (
        <div className="product-info">
            <div className="product-info-main">
                <div className="product-info-main-section">{param.productId}</div>
                <div className="product-info-main-section">hdhdfhdfhdh</div>
                <div className="product-info-main-section">dhdhdhdhdhd</div>
            </div>
            <div className="product-info-question">dhheuerwevrr</div>
        </div>
    )
}

export default ProductInfo;
