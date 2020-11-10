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

const promise = loadStripe('pk_live_51Hlyg2Czva6o2vzTRGropYLykR1PR0wU0M9FHNzLT9SKCz8Oaa9lXanM8ZJAEmaIiOvDw2XWgccb2HnKRdDoIwgC00DK4bbQ0o')

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
