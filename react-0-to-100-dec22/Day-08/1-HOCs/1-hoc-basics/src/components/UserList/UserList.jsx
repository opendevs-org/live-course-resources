
export const UserList = ({ data }) => {
    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}
