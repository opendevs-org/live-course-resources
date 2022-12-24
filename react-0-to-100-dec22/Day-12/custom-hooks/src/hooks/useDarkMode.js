import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("dark-mode-enabled", false);

    const toggleDarkMode = () => setDarkMode(!darkMode)

    useEffect(() => {
        const element = window.document.body;

        if (darkMode) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }, [darkMode])

    return [darkMode, toggleDarkMode]
}
