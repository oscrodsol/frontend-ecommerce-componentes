import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/movies" element={<List/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/toprated" element={<TopRated/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/admin" element={<Admin/>}/>
                  <Route path="/filtraralquilerId" element={<FiltrarAlquilerId/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
