import React from 'react'
import OneProduct from './oneProduct'

// const Products = (props) => {
const Products = ({ allproducts, something, onAdd }) => {
    // const title = "New product";
    // const text = "This is new product description";
    return (
        <div className='all-products'>
            {allproducts === null ? "No products" : allproducts.map((p) => (
                <OneProduct product={p} key={p.id} onAdd={onAdd} inCart={1}/>
            ))}


            {/* <OneProduct product={allproducts[0]} />
            <OneProduct product={allproducts[1]} />
            <OneProduct product={allproducts[2]} /> */}

            {/* <OneProduct name={title} text={text} />
            <OneProduct name={title} text={text} />
            <OneProduct name={title} text={text} /> */}
        </div>
    )
}

export default Products