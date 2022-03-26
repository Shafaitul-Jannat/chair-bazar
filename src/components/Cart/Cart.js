import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart, chooseAgain, choose1ForMe } = props;

    // let name;
    // for (const product of cart) {
    //     name = name + product.name;
    // }
    //console.log(cart);

    return (
        <div className='cart'>
            <h3>Selected Chair</h3>

            {cart.length === 0 && (
                <div className='cart-warning'>
                    <p> Cart is empty </p>
                </div>
            )}
            {cart.map((item) => (
                // key = item.id
                < h6 > {item.name}</h6>
            ))
            }
            <div>
                <button className="choose1ForMe" onClick={() => choose1ForMe()}>Choose 1 for me</button></div>
            <div>
                <button className="chooseAgain" onClick={() => chooseAgain()}>Choose Again</button></div>
        </div >
    );
};

export default Cart;