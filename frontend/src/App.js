import { UserContextProvider } from "./context/User"
import { CartContextProvider } from "./context/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductsList from "./pages/ProductsList"
import Signup from "./pages/Signup"
import Basket from "./pages/Basket"


const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <Routes>
            <Route exact path = "/" element= {<Home/>} />
            <Route path = "/login" element= {<Login/>} />
            <Route path = "/signup" element= {<Signup/>} />
            <Route path = "/Products/:id" element= {<ProductsList/>} />
            <Route path = "/Product/:id" element= {<Product/>} />
            <Route path = "/basket" element= {<Basket/>} />
          </Routes>   
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App




