import { NavLink } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa6';
const Footer = () => {

    return (            
            
        <footer className="m-4">
            <div className="w-full mx-auto p-4 md:py-4 text-center">
                <div className="sm:flex items-center justify-center">
                    <NavLink to="/" className="homeNav flex items-center justify-center mb-2 sm:mb-0">
                        <span className='text-2xl mr-3 text-purple-700'><FaCreditCard /></span>
                        <span className=" text-xl mt-1 font-montserrat">Viktoria Wallet</span>
                    </NavLink>
                </div>
                <hr className="my-6 border-purple-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Viktoria Wallet™</a>. All Rights Reserved.</span>
            </div>
        </footer>
  
    )
}


export default Footer;