import React from "react"
import "./Home.scss"
import axios from "axios"
import ProductCard from '../../Components/ProductCard/ProductCard'
import {useState, useEffect} from 'react'


const Home = (props) => {


    let [components, setComponents] = useState([])

     useEffect(() => {
         axios.get('http://127.0.0.1:8000/api/get_all_products')
         .then(resp => {
            console.log(resp)
            setComponents(
               resp.data
            )
        })
    },[])
    console.log(components)
    return (
        <div className="home">
                {
                components.data?.map((products, index) => (
                    <ProductCard key={index} data={products}/>
                ))
                }
        </div>
    )
}

export default Home