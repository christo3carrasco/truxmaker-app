import React, { useDebugValue, useEffect } from "react";
import { useState, createContext ,useContext } from "react";
import { auth, authPersistence } from "../../services/Firebase/Firebase";
import { get_rnd, get_uuid } from "../../utils/generateUuid";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider, 
  signInWithRedirect, 
  signInWithPopup } from "firebase/auth"; 
import { getUserByIdApi } from "../../services/Firebase/FirestoreFuncions";
export const Context = createContext();

export const ProviderContext = ({children}) => {
  const [user, setUser] = useState({
    id:'', 
    firstName: '',
    lastName:'',
    email:'',
    password:'',
  });
  const [userCredentials, setUserCredentials] = useState(null); 
  const [userInfoDb, setUserInfoDB] = useState(user); 
  const [cartArrayProducts, setCartArrayProducts] = useState([])
  const [totalCart, setTotalCart] = useState(0.0); 
  const [date, setDate] = useState(); 
  const [cart, setCart] = useState({}); 
  const [isLoading, setIsLoading] = useState(); 

  useEffect(()=>{
    onAuthStateChanged(authPersistence, currentUser =>{
      setUserCredentials(currentUser);
    })
  },[])
  
  useEffect(()=>{
    const getUserDataApi = async() => {
      if (userCredentials != null) {
        console.log(userCredentials);
        const tempData = await getUserByIdApi(userCredentials.uid); 
        setUserInfoDB(tempData); 
        console.log("Este es el tempData",tempData);  
      }
    }
    (()=>{getUserDataApi()})()
  },[userCredentials])
  
  // Login, register and logout with email and password
  const RegisterWithEmailAndPassword = async( email, password) => {
    const registerCredentials = await createUserWithEmailAndPassword(authPersistence, email, password);
    return registerCredentials; 
  } 
  
  const LoginWithEmailAndPassword = async(email, password) => {
    await signInWithEmailAndPassword(authPersistence, email, password); 
  } 
  const LogOutWithEmailAndPassword = async() =>{
    setUserInfoDB(user);
    await signOut(auth); 
  }

  // Login, register and logout with google account
  const LoginWithGoogleAccount = async() => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(authPersistence, provider);   
  }
  const RegisterWithGoogleAccount = () => {

  }
  const signOutWithGoogleAccount = () => {

  }

  // Login, register and logout with  facebook account 
  
  // Product Function 
  const addProductToCart = (product) => {
    setCartArrayProducts([...cartArrayProducts, product.item]); 
    setTotalCart(totalCart + product.item.precio); 
  }
  const deleteProductToCart = (Index, Price) => {
    const newArray = cartArrayProducts.slice(0,Index).concat(cartArrayProducts.slice(Index+1)); 
    setCartArrayProducts(newArray); 
    setTotalCart(totalCart - Price)
  }

  useEffect(()=>{
    setCart({ id: get_uuid(), total:totalCart, productsCart: cartArrayProducts });
  },[cartArrayProducts])


  return(
    <Context.Provider value={{user, cart, setCart,cartArrayProducts, setCartArrayProducts, isLoading, setIsLoading, userInfoDb, userCredentials, RegisterWithEmailAndPassword, LoginWithEmailAndPassword, LogOutWithEmailAndPassword, LoginWithGoogleAccount, addProductToCart, deleteProductToCart}}>
      {children}
    </Context.Provider>
  )
}
