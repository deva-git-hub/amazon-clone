import "./Login.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect to home page
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__home" to="/">
          <img
            className="login__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="login__form">
          <h1>Sign-In</h1>
          <br />
          <form onSubmit={login}>
            <h5>Email</h5>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <h5>password</h5>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button className="login__button" type="submit">
              Login
            </button>
            <br />
          </form>
          <h5>(or)</h5>

          <button onClick={register}>Create Amazon Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
