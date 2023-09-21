import { NavLink } from 'react-router-dom';
import { FaHouse, FaCreditCard } from 'react-icons/fa6';

export const Navbar = () => {

    return (
        <nav className="flex flex-col list-none justify-center items-center font-bold">
            <NavLink to="/" className='homeNav text-xl'><FaHouse /></NavLink>
            <div className='flex justify-around w-full my-4'>       
                <NavLink to="/cards" className="leading-10 w-6/12 text-center border-b-2 border-solid border-b-[rgb(235,196,235)]">Cards</NavLink>
                <NavLink to="/add" className="leading-10 w-6/12 text-center border-b-2 border-solid border-b-[rgb(235,196,235)]">Add Card</NavLink>
            </div>
        </nav>
    )
}