import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './components/Cart';
// za rutiranje
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('/productsData.json');
      console.log(response.data.products);
      setProducts(response.data.products);
    }

    fetchData();
  }, [])

  
  function refreshCart() {
    let newProducts = products.filter((prod) => prod.amount > 0);
    setCartProducts(newProducts);
  }

  function updateCart(product) {
    setCartProducts([...cartProducts, product]);
  }

  //poslati id iz komponente OneProduct
  const addToCart = (id) => {
    //products.map((p)=>{
    products.forEach((p)=>{
      if(p.id === id){
        p.amount = p.amount + 1;
        setCartNum(cartNum + 1);
        console.log("Id: ", p.id, " amount: ", p.amount);
        if(p.amount === 1) {
          updateCart(p)
        }
        else {
          refreshCart();
        }
      }
    })
}
  return (
    <BrowserRouter className="App">
      <Navbar cartNum={cartNum}/>
      <Routes>
        <Route path='/' element={<Products allproducts={products} something="neki tekst" onAdd={addToCart}/>} />
        <Route path='/cart' element={<Cart allproducts={cartProducts}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
