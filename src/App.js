import React from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import './styles/App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/checkout'>
                        <Navbar/>
                        <Checkout/>
                    </Route>
                    <Route path='/login'>
                        <h1>Login page</h1>
                    </Route>
                    <Route path='/'>
                        <Navbar/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
