import React, { useEffect } from "react";
import * as styles from "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from './firebase';


const App = () => {
  // data layer
  const [{user}, dispatch] = useStateValue();

  // code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user is already logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // clean up operation
      unsubscribe();
    }

  }, []);

  console.log(user);

  return (
    <Router>
      <div className={styles.App}>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
