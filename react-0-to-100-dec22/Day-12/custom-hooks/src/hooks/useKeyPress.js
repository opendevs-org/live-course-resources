import { useEffect, useState } from 'react';

export const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const handler = ({ type, key }) => {
        console.log(key)
        if (type === "keydown" && key.toLowerCase() === targetKey) {
            setKeyPressed(true)
        } else {
            setKeyPressed(false)
        }
    }


    useEffect(() => {
        console.log('mount')
        window.addEventListener("keydown", handler)
        window.addEventListener("keyup", handler)

        return () => {
            window.removeEventListener("keydown", handler)
            window.removeEventListener("keyup", handler)
            console.log('unmount')
        }
    }, [])

    console.log('return')
    return keyPressed
}
