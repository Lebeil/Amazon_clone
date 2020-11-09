import React, {Fragment} from 'react';
import Product from "./Product";
import '../styles/Home.css'

const Home = () => {
    return (
        <Fragment>
            <div className="home">
                <img className="home_image"
                     src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/Borat2/no_ring/SENG_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_VAR-Daughter_1500X600_PV_fr-FR_176170._CB416710413_.jpg"
                     alt="amazon"/>
                {/*Product*/}
                <div className="home_row">
                    <Product
                        id="1"
                        title="Apple MacBook Pro (16 pouces, 16Go RAM, 1To de Stockage, Intel Core i9 2,3GHz) Gris Sidéral"
                        price={2949.0}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL320_.jpg"
                    />
                    <Product
                        id="2"
                        title="Nouveau Apple iPhone 12 (128 Go) - Bleu"
                        price={959.00}
                        rating={3.5}
                        image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="3"
                        title="Nouveau Apple iPhone 12 Pro Max (512 Go) - Graphite"
                        price={1349.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71c7UQ9XPmL._AC_UL320_.jpg"
                    />
                    <Product
                        id="4"
                        title="Dyson V11 Absolute, Bleu, Taille L"
                        price={829.99}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/51T-zO0g+xL._AC_UL320_.jpg"
                    />
                    <Product
                        id="5"
                        title="Véritable® Classic (Blanc) - Potager d’Intérieur Fabriqué en France – Jardin Autonome Intelligent Livré Avec 4 Lingot® - Élu Produit De l’Année 2020"
                        price={149.09}
                        rating={4}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41VY6yrnvBL._AC_SX184_.jpg"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="6"
                        title="Lean Startup: Adoptez l'innovation continue"
                        price={29.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41uNAbThwiL._SX334_BO1,204,203,200_.jpg"
                    />
                </div>

            </div>
        </Fragment>
    );
};

export default Home;
