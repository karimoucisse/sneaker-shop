import { UserContextProvider } from "./context/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import ProductsList from "./pages/ProductsList"
import Signup from "./pages/Signup"


const App = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route exact path = "/" element= {<Home/>} />
          <Route path = "/login" element= {<Login/>} />
          <Route path = "/signup" element= {<Signup/>} />
          <Route path = "/Products/:id" element= {<ProductsList/>} />
          <Route path = "/Product/:id" element= {<Product/>} />
        </Routes>   
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App




