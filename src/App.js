import React from "react"
import Navbar from "./components/Navbar";
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/checkout'>
                        <h1>Bonjour Amazon Clone &#128640;</h1>
                    </Route>
                    <Route path='/login'>
                        <h1>Login page</h1>
                    </Route>
                    <Route path='/'>
                        <Navbar/>
                        <h1>Home page &#127984;</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
