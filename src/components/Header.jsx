import { Navbar } from '../components/Navbar';
import { FaCreditCard } from 'react-icons/fa6';
import { Link} from 'react-router-dom'
import { DarkMode } from './DarkMode';

const Header = () => {

    return (
        <div className="header">          
            <div className='mt-4 md:flex md:justify-between'>
                <Link to="/" className='md:ml-3'>
                    <h1 className='flex justify-center gap-4 font-montserrat font-semibold text-3xl md:text-4xl m-2'>
                    <span className='text-4xl text-purple-700'><FaCreditCard /></span><span>Viktoria Wallet</span>
                    </h1>
                </Link>
                <div className='md:hidden text-right m-2 absolute right-0 top-0'>
                <DarkMode />          
                </div>
                <Navbar />
            </div>
        </div>
    )
}


export default Header;