import React from 'react';
/*import {useStateValue} from "../StateProvider";*/
import '../styles/Checkout.css'

const Checkout = () => {
    /*const [{basket}] = useStateValue()*/

    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
                     alt="ad"/>
                <div>
                    <h2 className="checkout_title">Shopping basket</h2>
                    {/*Basket Product*/}
                    {/*Basket Product*/}
                    {/*Basket Product*/}
                    {/*Basket Product*/}
                </div>
            </div>

            <div className="checkout_right">
                <h2>The subTotal will go here </h2>
            </div>

        </div>
    );
};

export default Checkout;
