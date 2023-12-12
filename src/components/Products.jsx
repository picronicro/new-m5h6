import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, shopActions} from "../redux/shopSlice.js"

function Products(props) {
    const isLoading = useSelector(state => state.shop.status.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, []);
    const products = useSelector(state => state.shop.products)
    const error = useSelector(state => state.shop.status.error)

    return (
        <div className="container">
            {
                isLoading && <img src="https://tenor.com/bBr3w.gif" alt="loading"/>
            }
            {
                error && <div>{error}</div>
            }
            {
                products && products.map(good => <div key={good.id}>
                    <div className="good">
                        <div className="info">
                            <h2>{good.title}</h2>
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