import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon"/>
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login_signInButton">Sign In</button>
                </form>

                <p>En continuant, vous acceptez les conditions d'utilisation et la notice Protection de vos informations personnelles d'Amazon.</p>


                <div className="login_text login_text2">
                    <h5>Nouveau chez Amazon? </h5>
                </div>

                <button className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
};

export default Login;
