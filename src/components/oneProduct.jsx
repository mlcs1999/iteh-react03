import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

//const OneProduct = (props) => {
const OneProduct = ({ product, onAdd, inCart }) => {
    const design = { margin: 10, backgroundColor: 'lightgreen' };

    // function addToCart() {

    // }

    // const addToCart = () => {
    //     product.amount = product.amount + 1;
    //     console.log("Id: ", product.id, " amount: ", product.amount);
    // }
    return (
        <div className={inCart === 1 ? 'card' : 'card-cart'} style={design}>
            <img src="https://picsum.photos/200" alt="Random slika" className= {inCart === 1 ? "card-img-top" : "card-img-left" } />
            <div className="card-body">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-text">
                    {product.description}
                </p>
                {inCart === 1 ? 
                <> 
                <button className="btn" onClick={() => onAdd(product.id)}><FaPlus /></button>
                <button className="btn"><FaMinus /></button> 
                </> :
                <h3>Amount: {product.amount}</h3>
                }
                
            </div>
        </div>
    )
}

export default OneProduct