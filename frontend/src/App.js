import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Order from './components/Order';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import SignUp from './components/SignUp';
import OrderHistory from './components/OrderHistory';


function App() {

  const [orderItems, setOrderItems] = useState([]);
  const [token, setToken] = useState("");

  const handleClick = (item) => {
    let isPresent = false
    orderItems.forEach((order, index) => {
      if (order.id === item.id) {
        order.quantity += 1
        isPresent = true
      }
    })
    if (!isPresent) {
      setOrderItems([...orderItems, item])
    }

    
    // let isPresent = false
    // orderItems.push(item);
    // console.log(orderItems)
  }

  const handleChange = (item, d) => {
    let i = -1;
    
    orderItems.forEach((order, index) => {
      if (order.id === item.id) {
        i = index;
      }
    });

    const tempArray = orderItems;
    tempArray[i].quantity += d;
    
    // if orderlist empty
    if (tempArray[i].quantity === 0) {
      tempArray[i].quantity = 1
    }

    setOrderItems([...tempArray])
  }

  return (
    <Routers>
      <div className="App">
        <Navbar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu handleClick={handleClick} />}/>
            <Route path="/order" element={<Order orderItems={orderItems} setOrderItems={setOrderItems} handleChange={handleChange} />}/>
            <Route path="/login" element={<Login setToken={setToken} />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/orderhistory" element={<OrderHistory token={token} />}/>
          </Routes>
        </div>
      </div>

    </Routers>
  );
}

export default App;
