import { useUser } from '../../context/UserContext'

export const LoginButton = () => {
    const { setIsLoggedIn } = useUser()
    return (
        <button
            onClick={() => {
                setIsLoggedIn(true)
            }}
        >
            Login!
        </button>
    )
}
