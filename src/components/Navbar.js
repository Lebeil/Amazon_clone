import React from 'react';
import '../styles/Navbar.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../StateProvider";
import {auth} from '../Firebase';

const Navbar = () => {
    const [{basket, user}] = useStateValue();

    const handleAuth = ()=> {
        if (user) {
            auth.signOut();
        }
    }

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
                <Link to={!user && '/login'} className="header_link">
                    <div className="header_option" onClick={handleAuth}>
                        <span className="header_option1">Bonjour {!user ? 'Invité(e)' : user.email}</span>
                        <span className="header_option2">{user ? 'Déconnexion' : 'Se connecter'}</span>
                    </div>
                </Link>

                {/****** solution ******/}
                {/*Warning: Failed prop type: Invalid prop `to` supplied to `Link`.*/}

                {/*{!user ?
                    <Link to='/login' className="header_link">
                    <div className="header_option" onClick={handleAuth}>
                        <span className="header_option1">Bonjour {!user ? 'Invité(e)' : user.email}</span>
                        <span className="header_option2">{user ? 'Déconnexion' : 'Se connecter'}</span>
                    </div>
                    </Link>
                    : <Link to='/' className="header_link">
                        <div className="header_option" onClick={handleAuth}>
                            <span className="header_option1">Bonjour {!user ? 'Invité(e)' : user.email}</span>
                            <span className="header_option2">{user ? 'Déconnexion' : 'Se connecter'}</span>
                        </div>
                </Link>}*/}

                {/**********************/}

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
                        <span className="header_option2 header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
