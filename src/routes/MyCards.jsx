import CardList from "../features/cards/CardList";
import { useOutletContext } from "react-router-dom";


const MyCards = () => {
    let userName = useOutletContext();


    // const userName = useSelector((state) => state.cardInStore.randomName.first + " "  + state.cardInStore.randomName.last)
    // const cards = useSelector((state) => state.cardInStore.cards);

    //Gör en map och skriv ut Cards komponenten med cardattributen men alltid username som name
    //Gör logik häör inne för att uppdatera isactive state om man trycker på kortet?
    return (
        <div>

            <CardList userName={userName} />
        </div>

    )
}

export default MyCards;