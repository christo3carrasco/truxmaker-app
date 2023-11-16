import React from "react";
import { useState, createContext ,useContext } from "react";
export const Context = createContext();

export const ProviderContext = ({children}) => {
  const [user, setUser] = useState({
    firstName: 'UserDefaultContext',
    lastName:'UserDefaultContext',
  });
  const [cart, setCart] = useState([]); 
  const [isLoading, setIsLoading] = useState(); 
  const Register = (firstnames, lastnames, email, password) => {
    console.log('Nuevo usuario registrado', firstnames, lastnames, email, password);
  } 
  const Login = (email, password) => {
    console.log('Usuario Logueado', email, password);
  } 
  const LogOut = () =>{

  }
  return(
    <Context.Provider value={{user, cart, setCart, isLoading, setIsLoading, Register, Login, LogOut}}>
      {children}
    </Context.Provider>
  )
}