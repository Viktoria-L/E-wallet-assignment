import CardList from "../features/cards/CardList";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaGear } from "react-icons/fa6";




const MyCards = () => {
    let userName = useOutletContext();
    let status = useSelector((state) => state.cardInStore.status);
 
    return (
        <div className="flex flex-col md:mt-20 w-full justify-center max-w-290">
            <h2 className="mb-8 font-bold text-center text-2xl">{userName ? `Welcome ${userName}!` : status}</h2>
            <p className="hidden md:block mx-4 mb-8 text-sm text-center">Here you can view your active and inactive cards, you can select which one is active by pressing 'activate' and you can delete cards by pressing the settings button.</p>              
            <div className="flex-grow">
            <CardList userName={userName} />
            </div>
           
        </div>

    )
}

export default MyCards;