import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./User";

const CartContext = createContext()

const CartContextProvider = props => {
    const {user} = useContext(UserContext)
    const [cart, setCart] = useState()

    const API = "http://localhost:5000/cart"
    // const API = "https://sneaker-shop-fr.herokuapp.com/"

    useEffect(() => {
        if(localStorage.getItem("id")) {
            GetOneCart(localStorage.getItem("id"))
        }else {
            createCart({
                userId: user ? user._id : null
            })
            console.log('dont get id');
        }

        if(user) {
            if(!cart.userId) {
                modifyCart(
                    cart._id,
                    {
                        userId: user._id
                    }
                )
            }
        }
    }, [])

    const createCart = async values => {
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
            console.log("success");
        }

    }

    const modifyCart = async (id, values) => {
        const response = await fetch (`${API}/${id}`, {
            method: 'put',
            headers: {
                    'Content-Type': 'application/json',
                },
            credentials: 'include',
            body: JSON.stringify(
                {products: values}
            )
        })
        if(response.status >= 400) {
            alert("Error")
        } else {
            GetOneCart(cart._id)
        }
    }

    const GetOneCart = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            credentials: 'include'
        })
        if (response.status >= 400) {
            throw response.statusText
        }
        const data = await response.json()
        setCart(data)
    }

    const value = {
        cart,
        setCart,
        GetOneCart,
        createCart,
        modifyCart
    }

    return (
        <CartContext.Provider value= {value}>
            {props.children}
        </CartContext.Provider>
    )


}

export {
    CartContextProvider,
    CartContext
}