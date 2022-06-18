import { createContext, useState, useEffect } from "react";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [users, setUsers] = useState(null)

    const API = "http://localhost:5000/user"

    useEffect(() => {
        getAllUser() 
    },[])

    const getAllUser = async () => {
        const response = await fetch(`${API}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        if(!data.error) {
            setUsers(data)
        }
    }
    
    const value = {
        users,
        setUsers  
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