import { useContext } from "react";
import { Context } from "../context/Context";
export const useData = () => {
  const contextData = useContext(Context); 
  return contextData; 
}