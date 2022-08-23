import React from "react"
import "./Home.css"
import axios from "axios"
import PeliculasCard from '../../Components/PeliculasCard/PeliculasCard'
import {useState, useEffect} from 'react'


const Home = (props) => {


    let [cartelera, setCartelera] = useState([])

     useEffect(() => {
         axios.get('https://videoclub-backend.herokuapp.com/peliculas')
         .then(resp => {
            console.log(resp)
            setCartelera(
               resp.data
            )
        })
    },[])

    return (
        <div className="home">
                {
                cartelera.map((pelis, index) => (
                    <PeliculasCard key={index} data={pelis}/>
                ))
                }
        </div>
    )
}

export default Home
