import React from 'react'
import "../assets/CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
               renderText={(value) =>(
                   <>
                    <p>
                        subtotal ({basket.length} items): <strong> {value} </strong>
                    </p>
                    <small className="subtotal-gift">
                        <input type="checkbox" /> This order contain a gift
                    </small>
                   </>
               )} 
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeprator={true}
               prefix={"$"}  
                />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
