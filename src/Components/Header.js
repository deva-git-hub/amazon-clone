import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const logout = (event) => {
    auth.signOut();
  };
  return (
    <nav className="header">
      <div className="headerLeft">
        <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
       <div className="header__search">
        <input className="header__searchinput" />
        <SearchIcon className="header__searchicon" />
      </div>
      </div>
      
      {/* search bar*/}
     
      {/* 3 links */}
      <div className="header__nav">
        {user === null ? (
          <Link to="./login" className="header__link">
            <div className="header__option">
              <span className="header__optionlinetwo">SignIn</span>
            </div>
          </Link>
        ) : (
          <Link to="/" className="header__link" onClick={logout}>
            <div className="header__option">
              <span className="header__optionlineone">Hello, {user?.email}</span>
              <span className="header__optionlinetwo">SignOut</span>
            </div>
          </Link>
        )}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">& Order</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__basket">
            <span className="header__basketcount">{basket?.length}</span>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
