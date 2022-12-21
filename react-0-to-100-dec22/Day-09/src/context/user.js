import { useContext, createContext, useState } from 'react'

const initialState = {
  isLoggedIn: false,
  setIsLoggedIn: () => {}
}

const UserContext = createContext(initialState)

const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, useUser }
