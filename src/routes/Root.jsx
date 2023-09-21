import { Outlet, useLoaderData } from "react-router-dom"
import { Navbar } from "../components/Navbar";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const Root = () => {
    const [darkMode, setDarkMode] = useState(false);
    const userData = useLoaderData();
    const dispatch = useDispatch();
    const userName = `${userData.results[0]?.name.first} ${userData.results[0]?.name.last}`

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className={`main-div h-screen text-black dark:text-white dark:bg-black`}>
            <button onClick={() => {setDarkMode((prevState) => !prevState)}}>
                {darkMode ? <FaSun className="text-lg mt-1 ml-1" /> : <FaMoon className="text-xl mt-1 ml-1" />}
            </button>
            <Navbar />          
            <Outlet context={userName} />
        </div>
    )
}

export default Root;