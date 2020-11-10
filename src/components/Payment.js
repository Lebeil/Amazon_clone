import React, { useState, useEffect } from "react";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import '../styles/Payment.css';
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import {getBasketTotal} from "../Reducer";
import CurrencyFormat from "react-currency-format";
import axios from './axios';


const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const formatArticle = basket => {
        if(basket.length>0){
            return (`articles`)
        }else {
            return (`article`)
        }
    }

    useEffect(()=> {
            const getClientSecret = async ()=> {
                const response = await axios({
                    method: 'post',
                    url: `/payment/create?total=${getBasketTotal(basket)}`

                });
                setClientSecret(response.data.clientSecret)
            }
            getClientSecret();
        },[basket])


    const handleSubmit = async (e)=> {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=> {
            // payment confirmation

        })
        setSucceeded(true);
        setError(null)
        setProcessing(false)

        history.replace('/orders')

    }

    const handleChange = (e)=> {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
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
                        <p>75001 PARIS</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Mode de paiement</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Total du panier {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Proccessing</p> : "Acheter maintenant"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="payment_section">
                    <h3>Vérification et validation de votre commande</h3>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
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
