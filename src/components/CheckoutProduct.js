import React from 'react';
import '../styles/CheckoutProduct.css'
import {useStateValue} from "../StateProvider";

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=> {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="ama"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array.from({length: rating}, ()=> '🌟')}
                </div>
                <button onClick={removeFromBasket}>Supprimer du panier</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
