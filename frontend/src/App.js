import { UserContextProvider } from "./context/User"
import { CartContextProvider } from "./context/Cart"
import { OrderContextProvider } from "./context/Order"
import { BrowserRouter} from "react-router-dom"

import AnimatedRoutes from "./components/AnimatedRoutes"


const App = () => {

  return (
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <AnimatedRoutes/>   
          </OrderContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App




