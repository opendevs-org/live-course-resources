import { UserAvatar } from '../UserAvatar'

export const ToolBar = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
                backgroundColor: 'lightgray',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(0, 0, 0, 0.5)',
                height: "30px",
                width: "100%",
            }}
        >
            <UserAvatar />
        </div>
    )
}
