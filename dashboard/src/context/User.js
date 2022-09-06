import { createContext, useState, useEffect } from "react";

const UserContext = createContext({})

const UserContextProvider = props => {
    const [users, setUsers] = useState(null)
    const [itemNumber, setItemNumber] = useState(1)

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
        setUsers,
        itemNumber, 
        setItemNumber 
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