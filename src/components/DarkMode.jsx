import {useState, useEffect} from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa6';

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <button onClick={() => {setDarkMode((prevState) => !prevState)}}>
            {darkMode ? <FaLightbulb className="text-lg" /> : <FaMoon className="text-lg" />}
        </button> 
    )
}