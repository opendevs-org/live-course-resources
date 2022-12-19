import { LoginButton } from "../LoginButton"

export const LoginUser = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderRadius: 2,
        }}>
            <LoginButton />
        </div>
    )
}
