import { useContext } from "react";
import { GlobalContext } from "../contexts/globalContext";

export function useGlobalContext(){
  return useContext(GlobalContext)
}