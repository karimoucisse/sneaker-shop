import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./User";

const OrderContext = createContext()

const OrderContextProvider = props => {
    const {user} = useContext(UserContext)
    const [order, setOrder] = useState()

    const API = "http://localhost:5000/order"
    // const API = "https://sneaker-shop-fr.herokuapp.com/"

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

    const createOrder = async values => {
        const response = await fetch (`${API}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            console.log("error");
        } else {
            const data = await response.json()
        }

    }

    const value = {
        order: order,                                 
        setOrder,
        getOrders,
        createOrder
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