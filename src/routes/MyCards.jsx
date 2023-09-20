// import Cards from 'react-credit-cards-2';
// import { useSelector } from 'react-redux';
// import { toggleActiveCard } from '../features/cards/cardSlice';
import CardList from "../features/cards/CardList";

const myCards = () => {

    // const userName = useSelector((state) => state.cardInStore.randomName.first + " "  + state.cardInStore.randomName.last)
    // const cards = useSelector((state) => state.cardInStore.cards);

    //Gör en map och skriv ut Cards komponenten med cardattributen men alltid username som name
    //Gör logik häör inne för att uppdatera isactive state om man trycker på kortet?
    return (
        <div>

            <CardList />
        </div>

        // <div className="cards">
        // <h1>Här är dina kort</h1>

        // {/* AKTIVT KORT FÖRST, borde denna kanske vara en komponent? cardlisten , flytta CARDS-komponenten in i card eller nåt för 
        // att kunna använda onclick*/}
        //     {cards.map((card, i) => (<div onClick={()=>{console.log(card.isActive)}}>
        //         <p>{card.isActive}</p> <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} key={i} />
        //         </div>))}       
           
        // </div>
    )
}

export default myCards;