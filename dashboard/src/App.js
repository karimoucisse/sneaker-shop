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
            <Route exact path = "/user/:id" element= {<User/>}/>
            <Route exact path = "/users" element= {<Users/>}/>
            <Route exact path = "/new-user" element= {<NewUser/>}/>
            <Route exact path = "/product/:id" element= {<Product/>}/>
            <Route exact path = "/products" element= {<ProductList/>}/>
            <Route exact path = "/new-product" element= {<NewProduct/>}/>
          </Routes>
        </ProductContextProvider>
      </OrderContextProvider>
    </UserContextProvider>
    </BrowserRouter>
    )
}

export default App