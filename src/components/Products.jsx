import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {shopActions} from "../redux/shopSlice.js"

function Products(props) {
    const products = useSelector(state => state.shop.products)
    const dispatch = useDispatch()

    return (
        <div className="container">
            {
                products && products.map(good => <div key={good._id}>
                    <div className="good">
                        <div className="info">
                            <h2>{good.name}</h2>
                            <h2>{good.price}</h2>
                        </div>
                        <button onClick={event => dispatch(shopActions.addItem(good))}>buy it pls</button>
                        <button onClick={event => dispatch(shopActions.removeItem(good))}>deletos</button>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Products;