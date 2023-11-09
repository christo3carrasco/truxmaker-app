import { API_HOST } from "../utils/constants.js";

export async function getAllProductsApi (endPointUrl){
    try {
        const url = `${API_HOST}/products?offset=0&limit=6`
        const response = await fetch( endPointUrl || url); 
        const result = await response.json(); 
        return result; 
    } catch (error) {
        console.log(error);
    }
}
export async function getOneProductApi (idProduct){
    try {
        const url = `${API_HOST}/products/${idProduct}`; 
        const response = await fetch(url);
        const result = response.json(); 
        return result;  
    } catch (error) {
        console.log(error);
    }
}