import React from 'react';
import Subtotal from "./Subtotal";
import {useStateValue} from "../StateProvider";
import '../styles/Checkout.css'
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
    const [{basket, user}] = useStateValue()

    return (
        <div className="checkout">

            <div className="checkout_left">
                <img className="checkout_ad"
                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
                     alt="ad"/>
                <div>
                    <h3>Bonjour, {user?.email}</h3>
                    <h2 className="checkout_title">Shopping basket</h2>

                    {basket.map((item,i)=> (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}
                </div>

            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>

        </div>
    );
};

export default Checkout;
