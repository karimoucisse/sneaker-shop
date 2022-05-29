import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./User";

const CartContext = createContext()

const CartContextProvider = props => {
    const {user, setUser} = useContext(UserContext)
    const [cart, setCart] = useState()

    const API = "http://localhost:5000/cart"

    useEffect(() => {
        if(localStorage.getItem("userId")) {
            GetOneCart(localStorage.getItem("userId"))
            // console.log('get id');
        }else {
            createCart({
                userId: user ? user._id : null
            })
            // console.log('dont get id');
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
        console.log("cart" + cart);
    }, [user])

    const createCart = async values => {
        const response = await fetch (`${API}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            console.log("error");
        } else {
            const Cart = await response.json()
            setCart(Cart)
            localStorage.setItem("userId", user._id)
        }

    }

    const modifyCart = async (id, values) => {
        const response = await fetch (`${API}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        if(response.status >= 400) {
            console.log("error");
        } else {
            const Cart = await response.json()
        }
    }

    const GetOneCart = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            credentials: 'include'
        })
        if (response.status >= 400) {
            throw response.stautusText
        }
        const data = await response.json()
        setCart(data)
    }

    const value = {
        cart,
        setCart,
        GetOneCart,
        createCart
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