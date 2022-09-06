import {BrowserRouter, Routes, Route} from "react-router-dom"
import { UserContextProvider } from "./context/User"
import { ProductContextProvider } from "./context/Product"
import { OrderContextProvider } from "./context/Order"
import Home from "./pages/Home"
import User from "./pages/User"
import Users from "./pages/Users"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
import NewUser from "./pages/NewUser"
import NewProduct from "./pages/NewProduct"

const App = () => {
  return (
    <BrowserRouter>
    <UserContextProvider>
      <OrderContextProvider>
        <ProductContextProvider>
          <Routes>
            <Route exact path = "/" element= {<Home/>}/>
            <Route path = "/user/:id" element= {<User/>}/>
            <Route path = "/users" element= {<Users/>}/>
            <Route path = "/new-user" element= {<NewUser/>}/>
            <Route path = "/product/:id" element= {<Product/>}/>
            <Route path = "/products" element= {<ProductList/>}/>
            <Route path = "/new-product" element= {<NewProduct/>}/>
          </Routes>
        </ProductContextProvider>
      </OrderContextProvider>
    </UserContextProvider>
    </BrowserRouter>
    )
}

export default App