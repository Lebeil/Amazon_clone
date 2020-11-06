import React from 'react';
import '../styles/Product.css'

function Product ({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {rating}
                    &#11088;&#11088;&#11088;&#11088;&#11088;
                    {/*{Array(rating)
                        .fill()
                        .map((_) => (
                            <p>&#11088;</p>
                        ))}*/}
                </div>
            </div>

            <img src={image} alt="lean startup"/>
            <button>Ajouter au panier</button>
        </div>
    );
};

export default Product;
