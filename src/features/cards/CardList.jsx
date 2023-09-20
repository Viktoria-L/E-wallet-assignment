import Cards from 'react-credit-cards-2';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActiveCard } from './cardSlice';
import Card from './Card';
import { useEffect } from 'react';

const CardList = () => {

    const userName = useSelector((state) => state.cardInStore.randomName.first + " "  + state.cardInStore.randomName.last)
    const cards = useSelector((state) => state.cardInStore.cards);
    const activeCardId = useSelector((state) => state.cardInStore.activeCardId);
    const dispatch = useDispatch();
  
    const handleCardClicked = (cardId) => {
      if(cardId !== activeCardId) {
        dispatch(toggleActiveCard(cardId));
      }
    }

//     const activeCard = cards.find((card) => card.isActive);
//   const inactiveCards = cards.filter((card) => !card.isActive);

// useEffect(()=> {
//     console.log("nytt aktivt kort: ", activeCard, inactiveCards)
// }, [activeCard])

  const sortedCards = [...cards]; // Skapa en kopia av korten för att inte ändra Redux-state direkt
  sortedCards.sort((a, b) => {
    // Sortera korten så att det aktiva kortet är först
    if (a === cards[activeCardId]) return -1;
    if (b === cards[activeCardId]) return 1;
    return 0;
  });


  return (
    <div className='card-container'>
      {sortedCards.map((card)=> (
        <div key={card.id} className={`card ${card.id === activeCardId ? 'active' : ''}`}
        onClick={()=> handleCardClicked(card.id)}>
          <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} />
      </div>))}




      {/* <div className="active-card">
        {activeCard && (
          <div className="card active"
            onClick={() => handleCardClicked(activeCard.index)}>
            <Cards cvc={activeCard.cvc} expiry={activeCard.expiry} name={userName} number={activeCard.number} />
            
          </div>
        )}
      </div>
      
      
      <div className="inactive-cards">
        {inactiveCards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.isActive ? 'active' : ''}`}
            onClick={() => handleCardClicked(index+1)}
          >
           <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} />
          </div>
        ))}
      </div> */}
    </div>
  );

    // Sort cards, active one first, blir inte riktigt rätt
    // const sortedCards = [...cards].sort((a, b) => {
    //     if (a.isActive && !b.isActive) return -1;
    //     if (!a.isActive && b.isActive) return 1;
    //     return 0;
    // });

    // return (
    //     <div className="bg-gray-300">

    //     <h2>CardList som inte funkar blir nåt includes fel</h2>





        {/* {sortedCards.map((card, i) => (<div className={`card ${card.isActive ? 'active' : ''}`} onClick={()=>{handleCardClicked(i)}} key={i}>
                <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} key={i} />
                </div>))}   */}
       

        {/* <div className="cards">
        <h1>Här är dina kort</h1>

        {/* AKTIVT KORT FÖRST, borde denna kanske vara en komponent? cardlisten , flytta CARDS-komponenten in i card eller nåt för 
        att kunna använda onclick}
            {cards.map((card, i) => <Card {...card} userName={userName} key={i} />)}       
           
        </div> */}

       // </div>
   //)
}

export default CardList;