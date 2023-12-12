import React from 'react';
import {useSelector} from "react-redux";
import "../titleAnim.css";

function Navbar(props) {
    const cart = useSelector(state => state.shop.cart)

    return (
        <div className="navbar">
            <div>
                <h1>super duper store that you've ever seen!!!!!!111!!1!</h1>
                <h1 className="rainbow_text_animated">redux-toolkit dlc + rest-api addon bundle for only $9.99</h1>
            </div>
            <div className="cart">
                <img width="25px" height="25px" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart"/>
                <p>{cart.length}</p>
            </div>

            {/* dropdown */}
            <div className="cart_content">
                {
                    cart && cart.map(item => <div id={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Navbar;