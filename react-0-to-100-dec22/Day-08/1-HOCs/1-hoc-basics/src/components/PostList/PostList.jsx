
export const PostList = ({ data, title }) => {
    return (
        <>
            <div style={{
                width: "100%"
            }}>
                <hr />
            </div>
            <p>{title}</p>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}
