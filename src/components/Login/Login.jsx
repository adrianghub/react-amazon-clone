import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      // log in, redirect to homepage...
      history.push('/');
    })
    .catch(e => alert(e.message))
  }

  const handleRegister = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      // create a user and log in...
      history.push('/');
    })
    .catch(e => alert(e.message)) 
  }

  return (
    <div className="login">
      <Link to="/">
         <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
        <h5>E-mail</h5>
        <input value={email} onChange={e => setEmail(e.target.value)}type="email"/>
        <h5>Password</h5>
        <input value={password} onChange={e => setPassword(e.target.value)}type="password"/>
        <button onClick={handleLogin}type="submit" className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
        </p>
        <button onClick={handleRegister} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default Login;