import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/globalContext";
import { MVEvent } from "./pages/MVEvent";

export function App(){
  return(
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/event" element={<MVEvent />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}