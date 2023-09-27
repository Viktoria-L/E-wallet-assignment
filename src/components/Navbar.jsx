import { NavLink } from 'react-router-dom';
import { DarkMode } from './DarkMode';

export const Navbar = () => {

    return (
        <nav className="flex flex-col list-none justify-center items-center font-bold mt-8 md:mt-0">
            <div className='flex justify-around w-full my-4 md:justify-end md:gap-12 md:mr-4'>       
                <NavLink to="/" className='hidden md:block leading-10 w-6/12 md:w-auto md:border-none text-center border-b-2 border-solid border-b-[hsl(272,77%,92%)]"'>Home</NavLink>
                <NavLink to="/cards" className="leading-10 w-6/12 md:w-auto md:border-none text-center border-b-2 border-solid border-b-[hsl(272,77%,92%)]">Cards</NavLink>
                <NavLink to="/add" className="leading-10 w-6/12 md:w-auto md:border-none text-center border-b-2 border-solid border-b-[hsl(272,77%,92%)]">Add Card</NavLink>
                <div className='hidden md:block self-center'>
                <DarkMode />
                </div>
            </div>
        </nav>
    )
}