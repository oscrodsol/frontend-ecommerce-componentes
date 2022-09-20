import './App.css'
import {useSelector} from 'react-redux'
import {userSelector} from "../src/Containers/User/userSlice"
import {Navigate} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from './Containers/Home/Home'
import Register from "./Containers/User/Register/Register"
import Login from "./Containers/User/Login/Login"
import Footer from "./Components/Footer/Footer"
import Profile from "./Containers/Profile/Profile"
import Logout from "./Containers/Profile/Profile"
import Cart from "./Containers/ShoppingCart/ShoppingCart"

function App() {

  const credentials = useSelector(userSelector);

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element={ credentials.token ? (<Profile/>): (<Navigate to="/login"/>)}/>
                  <Route path="/logout" element={<Logout/>}/>
                  <Route path="/shopping_cart" element={<Cart/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
