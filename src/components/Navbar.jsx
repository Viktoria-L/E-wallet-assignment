import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <ul className="flex list-none justify-center mt-3 gap-2 font-bold">
            <li>
                <NavLink to="/" className=''>Home</NavLink>
            </li>
            <li>
                <NavLink to="/cards" className=''>Cards</NavLink>
            </li>
            <li>
                <NavLink to="/add" className=''>Add Card</NavLink>
            </li>
        </ul>
    )
}