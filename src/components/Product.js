import React from 'react';
import '../styles/Product.css';
import {useStateValue} from "../StateProvider";

function Product ({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = ()=> {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array.from({length: rating}, ()=> '🌟')}
                    {/*{Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}*/}
                </div>
            </div>

            <img src={image} alt="lean startup"/>
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    );
};

export default Product;
