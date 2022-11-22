import { createContext, useState, useEffect, useContext, useCallback } from "react";
import { UserContext } from "./User";

const CartContext = createContext()

const CartContextProvider = props => {
    const {user} = useContext(UserContext)
    const [carts, setCarts] = useState()
    const [cart, setCart] = useState()
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')))

    const API = "http://localhost:5000/cart"

    useEffect(() => {
        GetAllCart()
        if(user) {
            onLogin()
        } 
        
    },[user, cart])

   
    const onLogin = async () => {
        if(!cart ) {
            if(carts) {
                let findUserCart = await carts.find(item => item.userId === user._id)
                if(findUserCart) {
                    setCart(findUserCart)
                }else {
                    createCart({ userId: user._id })
                }
            } else {
                createCart({ userId: user._id })
            }
            
        } 
        
        if(JSON.parse(localStorage.getItem('products'))) {
            let cartProducts = await cart.products
            if(cartProducts.length === 0) {
                cartProducts = [
                    ...products
                ]
            } else {
                cartProducts = [
                    ...cartProducts,
                    ...products
                ]
            }
            modifyCart(cart._id, cartProducts)
        }
    }

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
            const cartCreate = await response.json()
            setCart(cartCreate)
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
            localStorage.removeItem('products')
        }
    }

    const GetOneCart = async (id) => {
            const response = await fetch(`${API}/${id}`, {
                credentials: 'include'
            })
            if (response.status >= 400) {
                createCart()
                throw response.statusText
            }
            const data = await response.json()
            setCart(data)
    
    }

    const GetAllCart = async () => {
            const response = await fetch(`${API}`, {
                credentials: 'include'
            })
            if (response.status >= 400) {
                createCart()
                throw response.statusText
            }
            const data = await response.json()
            setCarts(data)
    }

    const value = {
        cart: cart,
        setCart,
        GetOneCart,
        createCart,
        modifyCart,
        products,
        setProducts,
        onLogin
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