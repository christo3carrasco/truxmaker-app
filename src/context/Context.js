import React, { useDebugValue, useEffect } from "react";
import { useState, createContext ,useContext } from "react";
import { auth, authPersistence } from "../../services/Firebase/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"; 
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
  const [userInfoDb, setUserInfoDB] = useState(); 
  const [cart, setCart] = useState([]); 
  const [isLoading, setIsLoading] = useState(); 

  useEffect(()=>{
    onAuthStateChanged(authPersistence, currentUser =>{
      setUserCredentials(currentUser);
    })
  },[])
  
  useEffect(()=>{
    const getUserDataApi = async() => {
      if (userCredentials != null) {
        const tempData = await getUserByIdApi(userCredentials.uid); 
        setUserInfoDB(tempData); 
        console.log("Este es el tempData",tempData);  
      }
    }
    (()=>{getUserDataApi()})()
  },[userCredentials])
  
  // Login, register and logout with email and password
  const RegisterWithEmailAndPassword = async( email, password) => {
    const registerCredentials = await createUserWithEmailAndPassword(auth, email, password);
    return registerCredentials; 
  } 
  
  const LoginWithEmailAndPassword = async(email, password) => {
    await signInWithEmailAndPassword(auth, email, password); 
  } 
  const LogOutWithEmailAndPassword = async() =>{
    await signOut(auth); 
  }
  // Login, register and logout with google account

  // Login, register and logout with  facebook account 
  return(
    <Context.Provider value={{user, cart, setCart, isLoading, setIsLoading, userInfoDb, userCredentials, RegisterWithEmailAndPassword, LoginWithEmailAndPassword, LogOutWithEmailAndPassword}}>
      {children}
    </Context.Provider>
  )
}
