import Cards from 'react-credit-cards-2';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActiveCard, deleteCard } from './cardSlice';
import { FaTrashCan } from 'react-icons/fa6';

const CardList = ({userName}) => {

   //const userName = useSelector((state) => state.cardInStore.randomName.first + " "  + state.cardInStore.randomName.last)
    const cards = useSelector((state) => state.cardInStore.cards);
    const activeCardId = useSelector((state) => state.cardInStore.activeCardId);
    const dispatch = useDispatch();
    console.log(userName);

  
    const handleCardClicked = (cardId) => {
      if(cardId !== activeCardId) {
        dispatch(toggleActiveCard(cardId));
      }}

      // const handleTrashCanClick = (e, id) => {
      //   e.stopPropagation();
      //   dispatch(deleteCard(id))

      // }

    // set only card as active card at start
    if(activeCardId === null){
      dispatch(toggleActiveCard(cards[0].id))
    }
    
  return (
    <div className="">
    <div className='card-container mx-4'>
        {/*Active card */}
      {cards.map((card) => {
        if (card.id === activeCardId) {
          return (
            <div key={card.id} onClick={() => handleCardClicked(card.id)} className="active-card">
              <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} />
            </div>
          );
          }
      })}
  
    {/* Inactive card-wrapper */}
      <div className="card-wrapper">
        {cards.map((card) => {
          if (card.id !== activeCardId) {
            return (
              <div key={card.id} className="card hover:scale-105">
              <div className="absolute top-0 right-32 z-10 p-1 bg-red-600 text-white text-sm rounded-tl cursor-pointer" onClick={() => handleCardClicked(card.id)}>
              Activate
              </div>
              <FaTrashCan className='text-xl absolute z-20 top-1 left-1 hover:scale-105 cursor-pointer' onClick={()=>dispatch(deleteCard(card.id))} />
              <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} />
            </div>
            );
          }      
        })}
      </div>
    </div>
    </div>
  );

 
}

export default CardList;