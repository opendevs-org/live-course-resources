import { useContext, useState } from 'react'
import { createContext } from 'react'

const initialState = {
    isLoggedIn: false,
    setIsLoggedIn: () => { },
    user: null,
    setUser: () => { },
}

// 1. Create a context
const UserContext = createContext(initialState)

// 3. fetch data using useUser hook
export const useUser = () => useContext(UserContext)

// 2. Our Provider
export const UserProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(initialState.isLoggedIn)
    const [user, setUser] = useState(initialState.user)

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
