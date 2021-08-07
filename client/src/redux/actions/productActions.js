import axios from 'axios'
import * as actionTypes from '../constants/productConstant'


const url = 'http://localhost:8000'

export const getProducts = () =>  async (dispatch) => {
    try{
        const {data} = await axios.get(`${url}/products`)
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})
    } catch(error){
        console.log("Error while calling products api", error.message)
    }
}