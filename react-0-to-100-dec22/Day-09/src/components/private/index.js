import { Navigate } from "react-router-dom"
import { useUser } from "../../context/user"

const Private = ({ children }) => {
  const { isLoggedIn } = useUser()

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return children
}

export { Private }
