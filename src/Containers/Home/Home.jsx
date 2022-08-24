import React from "react"
import "./Home.scss"
import axios from "axios"
import {useState, useEffect} from 'react'


const Home = () => {


/*     let [cartelera, setCartelera] = useState([])

     useEffect(() => {
         axios.get('http://127.0.0.1:8000/api/')
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
    ) */

    return(
        <div className="home">
            <div>
                <h1>Holabuenas</h1>
            </div>
        </div>
    )
}

export default Home
