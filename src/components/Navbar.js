import React from 'react';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

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
                        <span>Hello Marc</span>
                        <span>Sign in</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
