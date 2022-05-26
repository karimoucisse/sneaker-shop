import { createContext, useState, useEffect } from "react";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState(null)

    const API = "http://localhost:5000/auth/me"

    useEffect(() => {
        getUser() 
    },[])

    const getUser = async () => {
        const response = await fetch(`${API}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        if(!data.error) {
            setUser(data)
        }
    }
    
    const value = {
        user: user,
        setUser: setUser,
        getUser
    }
    
    return (
        <UserContext.Provider value = {value}>
            {props.children}
        </UserContext.Provider>
    )
    
}

export {
    UserContextProvider,
    UserContext
}