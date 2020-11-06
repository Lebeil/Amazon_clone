import React from 'react';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Navbar = () => {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo amazon"/>
            </Link>

            {/*search bar*/}
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            {/*Links*/}
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option1">Bonjour,</span>
                        <span className="header_option2">Sign in</span>
                    </div>
                </Link>

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option1">Retours</span>
                        <span className="header_option2"> et commandes</span>
                    </div>
                </Link>

                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option1">Prime</span>
                        <span className="header_option2">Amazon</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_option2 header_basketCount">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
