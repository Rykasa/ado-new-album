import { createContext, ReactNode, useState } from "react";

interface GlobalContextData{
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

interface GlobalContextProviderProps{
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData)

export function GlobalContextProvider({children}: GlobalContextProviderProps){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function openMenu(){
    setIsMenuOpen(true)
  }

  function closeMenu(){
    setIsMenuOpen(false)
  }

  return(
    <GlobalContext.Provider value={{
      isMenuOpen,
      openMenu,
      closeMenu
    }}>
      {children}
    </GlobalContext.Provider>
  )
}