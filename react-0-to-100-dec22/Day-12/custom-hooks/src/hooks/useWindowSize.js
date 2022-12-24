
import { useEffect, useState } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null,
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                ...windowSize,
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return windowSize
}
