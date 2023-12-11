import React from 'react';
import {useSelector} from "react-redux";

function Navbar(props) {
    const cart = useSelector(state => state.shop.cart)

    return (
        <div className="navbar">
            <h1>super duper store that you've ever seen!!!!!!111!!1! redux-toolkit dlc</h1>
            <div className="cart">
                <img width="25px" height="25px" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart"/>
                <p>{cart.length}</p>
            </div>
        </div>
    );
}

export default Navbar;