import { UserContextProvider } from "./context/User"
import { CartContextProvider } from "./context/Cart"
import { OrderContextProvider } from "./context/Order"
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Basket from './pages/Basket'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductsList from './pages/ProductsList'
import Signup from './pages/Signup'
import Account from './pages/Account'
import NotFound from "./pages/NotFound"



const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <Routes>
              <Route exact path = "/" element= {<Home/>} />
              <Route path = "/login" element= {<Login/>} />
              <Route path = "/signup" element= {<Signup/>} />
              <Route path = "/Products/:genre" element= {<ProductsList/>} />
              <Route path = "/Product/:id" element= {<Product/>} />
              <Route path = "/basket" element= {<Basket/>} />
              <Route path = "/my-Account" element= {<Account/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>  
          </OrderContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App




