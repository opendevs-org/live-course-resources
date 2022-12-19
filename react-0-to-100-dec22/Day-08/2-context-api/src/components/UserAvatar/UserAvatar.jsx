import { useUser } from '../../context/UserContext'

export const UserAvatar = () => {
    const { isLoggedIn } = useUser()

    return (
        <div>
            {isLoggedIn ? (
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
            ) : (
                <p>Login now!</p>
            )}
        </div>
    )
}
