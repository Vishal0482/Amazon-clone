import React from 'react';
import "../assets/CSS/Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    var arr = user?.email.split("@") || "guest@gmail.com".split("@");
    // console.log(user);
    return (
        <div>
            <div className="checkout">
                <div className="checkout-left">
                    <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                    <div>
                        <h3>Hello {arr[0]} </h3>
                        <h2 className="checkout-title">
                            Your Shopping basket
                        </h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
