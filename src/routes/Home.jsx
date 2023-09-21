import CardList from "../features/cards/CardList";
import { useOutletContext, Link } from "react-router-dom";

const Home = () => {
    let userName = useOutletContext();
   
    // kör en showState här med tillhörande knapp att visa kort , kanske som 
    //en underkomponent? eller som en knapp med länk
    //Ska jag köra knappar till alla kort eller till add eller ba länka ut kort direkt

    return (
        <div className="">
            <h1>Welcome {userName}!</h1>
           
            <Link to="cards" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Show Cards</Link>
            <Link to="add" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add card</Link>
            {/* <CardList userName={userName} /> */}
       
        </div>
    )
}

export default Home;


