import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./User";

const ProductContext = createContext()

const ProductContextProvider = props => {
    const {user} = useContext(UserContext)
    const [product, setPrdoduct] = useState()

    const API = "http://localhost:5000/products"

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {

        const response = await fetch(`${API}`, {
            credentials: 'include'
        })
        if (response.status >= 400) {
            throw response.statusText
        }
        const data = await response.json()
            setPrdoduct(data)
    }


    const value = {
        product,                                 
        setPrdoduct,
        getProducts,
    }


    return (
        <ProductContext.Provider value= {value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export {
    ProductContextProvider,
    ProductContext
}