import React, {useEffect} from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import './styles/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {auth} from './Firebase'
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HlyzwHAF2LJjkVLLzEdIkwX9hmMx6JvDt8y2ro4DSyMWiLkbxsXO0eouOqMk8cubTAOQNQlnZQc5Px76NgyjHbv00Ch3B5TPY')

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>', authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Navbar/>
                        <Home/>
                    </Route>
                    <Route path='/checkout'>
                        <Navbar/>
                        <Checkout/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/payment'>
                        <Navbar/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
