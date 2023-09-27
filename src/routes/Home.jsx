import { Link } from "react-router-dom";

const Home = () => {
       
    return (
        <div className="flex flex-col md:flex-row items-center h-full mx-8 gap-8">
            
            <div className="mt-6 md:mt-0 text-center md:text-left md:w-2/4">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">Your Financial Freedom Starts Here</h2>
                <p className="mt-4 mb-8 leading-loose">Experience the freedom of managing your money with our digital wallet. Join millions of users who have embraced the future of finance.</p>
                
                <div className="flex justify-center items-center gap-8">
                <Link to="cards" className="w-32 h-16 text-white flex justify-center items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-md text-center mr-2 mb-2">Show Cards</Link>
                <Link to="add" className="w-32 h-16 text-white flex justify-center items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-md text-center mr-2 mb-2">Add card</Link>
                </div>
            </div>
            <div className="md:w-2/4">
                <img src="src\assets\phone.jpg" className="rounded-md"></img>
            </div>
       
        </div>
    )
}

export default Home;


