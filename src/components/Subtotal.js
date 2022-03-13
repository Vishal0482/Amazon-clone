import React from 'react'
import "../assets/CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../hooks/StateProvider';
import { getBasketTotal } from '../hooks/reducer';
import { useNavigate } from "react-router-dom";

function Subtotal( {showButton} ) {
    const [{ basket }] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className={!showButton ? "subtotal" : "subtotal-bottom"}>
            <CurrencyFormat 
               renderText={(value) =>(
                   <>
                    <p>
                        Subtotal ({basket.length} items): <strong> {value} </strong>
                    </p>
                    {!showButton && <small className="subtotal-gift">
                        <input type="checkbox" /> This order contain a gift
                    </small>}
                   </>
               )} 
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeprator={true}
               prefix={"$"}  
                />

           {!showButton && <button onClick={e => navigate('/payment')} >Proceed to checkout</button>}
        </div>
    )
}

export default Subtotal;
