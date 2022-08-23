import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from './Containers/Home/Home'
import Register from "./Containers/User/Register/Register"
import Login from "./Containers/User/Login/Login"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
