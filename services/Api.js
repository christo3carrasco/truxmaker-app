import { API_HOST } from "../utils/constants.js";

export async function getAllProductsApi (){
    try {
        const url = `${API_HOST}/products?limit=20`
        console.log(url);
        const response = await fetch(url); 
        const result = await response.json(); 
        return result; 
    } catch (error) {
        console.log(error);
    }
}