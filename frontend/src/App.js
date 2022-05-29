import { UserContextProvider } from "./context/User"
import { CartContextProvider } from "./context/Cart"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import AnimatedRoutes from "./components/AnimatedRoutes"


const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <AnimatedRoutes/>   
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App




