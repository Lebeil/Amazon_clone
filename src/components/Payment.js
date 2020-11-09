import React from 'react';
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import '../styles/Payment.css';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()
    const formatArticle = basket => {
        if(basket.length>0){
            return (`articles`)
        }else {
            return (`article`)
        }
    }

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Passer la commande (
                    <Link to='/checkout'>{basket.length} {formatArticle(basket)}</Link>
                    )
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Adresse de livraison</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>3 place Vendôme</p>
                        <p>75001 PARIS</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Mode de paiement</h3>
                    </div>
                </div>

                <div className="payment_section">
                    <h3>Vérification et validation de votre commande</h3>
                    <div className="payment_items">
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

            </div>
        </div>
    );
};

export default Payment;
