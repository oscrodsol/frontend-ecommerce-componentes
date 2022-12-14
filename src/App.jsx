import './App.css'
import { useSelector } from 'react-redux'
import { userSelector } from "../src/Containers/User/userSlice"
import { Navigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from './Containers/Home/Home'
import Register from "./Containers/User/Register/Register"
import Login from "./Containers/User/Login/Login"
import Footer from "./Components/Footer/Footer"
import Profile from "./Containers/Profile/Profile"
import Admin from "./Containers/Admin/Admin"

import Cart from "./Containers/ShoppingCart/ShoppingCart"

function App() {

  const credentials = useSelector(userSelector);

  let testRole = () => {
    if (credentials.roles[0]?.role_id == 2 || credentials.roles[0]?.role_id == 3) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={credentials.token ? (<Profile />) : (<Navigate to="/login" />)} />
          <Route path="/shopping_cart" element={<Cart />} />
          <Route path="/admin" element={credentials.token ? (<Admin />) : (<Navigate to="/login" />)} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
