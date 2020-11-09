import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../Reducer";
import {useHistory} from "react-router-dom";

const Subtotal = () => {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue()
    const formatArticle = basket => {
        if(basket.length>0){
            return (`articles`)
        }else {
            return (`article`)
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Total ({basket.length} {formatArticle(basket)}): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
            <button onClick={e=> history.push('/payment')}>Payer</button>
        </div>
    );
};

export default Subtotal;
