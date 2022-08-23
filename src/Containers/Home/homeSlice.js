import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const homeSlice = createSlice({
    name: 'peliculas',
    initialState:{
        titulo:"",
        genero:"",
        url:"",
        duracion:"",
        rating:"",
        sinopsis:""
    },
    reducers:{
        letraPelicula: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    },
});

export const peliculasFiltradas = (titulo, genero, url, duracion, rating, sinopsis) => async (dispatch) => {

    try{

        let body = {
            titulo : titulo,
            genero : genero,
            url: url,
            duracion: duracion,
            rating: rating,
            sinopsis: sinopsis

          };
        const user = await axios.post('https://videoclub-backend.herokuapp.com/peliculas/letrapelicula',body);
        if(user.status === 200){
            dispatch(letraPelicula({
                titulo: user.data[0].titulo,
                genero: user.data[0].genero,
                url: user.data[0].url,
                duracion: user.data[0].duracion,
                rating: user.data[0].rating,
                sinopsis: user.data[0].sinopsis
            }))
        }
        
    }catch (error){
        console.log(error)
    }
};



export const {letraPelicula} = homeSlice.actions

export const selectLetraPelicula = (state) => state.peliculas

export default homeSlice.reducer;