import React from "react";
import * as styles from "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header'


const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Switch>
            <Route path="/checkout">
                <h1>Checkout</h1>  
            </Route>
            <Route path="/login">
                <h1>Login</h1>
            </Route>
            {/* default route */}
            <Route path="/">
                <Header />
                <h1>Home Page</h1>
            </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
