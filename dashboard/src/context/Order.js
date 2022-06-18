import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./User";

const OrderContext = createContext()

const OrderContextProvider = props => {
    const {user} = useContext(UserContext)
    const [order, setOrder] = useState()

    const API = "http://localhost:5000/order"

    useEffect(() => {
        if(user) {
            getOrders()
        }
    }, [user])

    const getOrders = async () => {
        const response = await fetch(`${API}/${user._id}`, {
            credentials: 'include'
        })
        if (response.status >= 400) {
            throw response.statusText
        }
        const data = await response.json()
        setOrder(data)
    }


    const value = {
        order,                                 
        setOrder,
        getOrders,
    }


    return (
        <OrderContext.Provider value= {value}>
            {props.children}
        </OrderContext.Provider>
    )
}

export {
    OrderContextProvider,
    OrderContext
}