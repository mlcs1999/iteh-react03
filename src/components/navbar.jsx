import React from 'react'
import {Link} from 'react-router-dom';

function Navbar({ cartNum }) {
    return (
        <div className='navBar'>
            <Link to='/'>My Store</Link>
            <Link to="/cart">
                <div className="cart-num">Cart: {cartNum}</div>
            </Link>
        </div>
    )
}

export default Navbar