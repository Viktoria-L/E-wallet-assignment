import Cards from 'react-credit-cards-2';
import { useSelector } from 'react-redux';
const myCards = () => {

    const userName = useSelector((state) => state.cardInStore.randomName.first + " "  + state.cardInStore.randomName.last)
    const cards = useSelector((state) => state.cardInStore.cards);
    cards.map((card) => console.log(card));
    //Gör en map och skriv ut Cards komponenten med cardattributen men alltid username som name
    
    return (
        <div className="cards">
        <h1>Här är dina kort</h1>

        {/* AKTIVT KORT FÖRST */}
             <Cards
                cvc={"234"}
                expiry={"12/03"}
                focused={focus}
                name={userName ? userName : name}
                number={"45611111111"}
                isActive="true"
                />
        
        </div>
    )
}

export default myCards;