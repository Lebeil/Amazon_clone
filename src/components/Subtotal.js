import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../Reducer";

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Total ({basket.length} article(s)): <strong>{value}</strong>
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
            <button>Payer</button>
        </div>
    );
};

export default Subtotal;
