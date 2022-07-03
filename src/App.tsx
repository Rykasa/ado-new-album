import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/globalContext";
import { MVEvent } from "./pages/MVEvent";
import { Subscribe } from "./pages/Subscribe";

export function App(){
  return(
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Subscribe />} />
          <Route path="/video/:slug" element={<MVEvent />} />
          <Route path="*" element={<MVEvent /> } />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}