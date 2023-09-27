import Cards from 'react-credit-cards-2';
import { useSelector, useDispatch } from 'react-redux';
import { toggleActiveCard, deleteCard } from './cardSlice';
import { FaTrashCan, FaGear, FaXmark, FaPlus } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardList = ({userName}) => {

   const [edit, setEdit] = useState(false);
    const cards = useSelector((state) => state.cardInStore.cards);
    const activeCardId = useSelector((state) => state.cardInStore.activeCardId);
    const dispatch = useDispatch();
  
    const handleCardClicked = (cardId) => {
      if(cardId !== activeCardId) {
        dispatch(toggleActiveCard(cardId));
      }}

    // set card in array as active card at start
    if(activeCardId === null){
      dispatch(toggleActiveCard(cards[0].id))
    }
    
  return (
    <div>
      <div className='flex justify-between w-full p-4'>
        <h2 className=' font-bold tracking-wider'>Active card</h2>
        <Link to="/add" className='self-center'><FaPlus /></Link>
        </div>
    <div className='flex flex-col items-start mx-4 gap-4'>
        {/*Active card */}
      {cards.map((card) => {
        if (card.id === activeCardId) {
          return (
            <div key={card.id} onClick={() => handleCardClicked(card.id)} className="active-card">
              <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} key={card.id}/>
            </div>
          );
          }
      })}
  

    {cards.length > 1 && (
        <div className='flex justify-between w-full'>
        <h2 className='font-bold tracking-wider'>Inactive cards</h2>
        <button onClick={()=>setEdit((prev) => !prev)} className=''>{edit ? <FaXmark /> : <FaGear/>}</button>
        </div>)}

    {/* Inactive card-wrapper */}
      <div className="card-wrapper relative h-72">
        {cards.map((card) => {
          if (card.id !== activeCardId) {
            return (              
                <div key={card.id} className="card hover:scale-105">
                    <div className={`${edit ? 'hidden' : 'absolute top-0 right-28 z-10 p-1 text-black text-sm cursor-pointer bg-white bg-opacity-40 backdrop-blur-sm z-32'}`} onClick={() => handleCardClicked(card.id)}>
                    Activate
                    </div>
                  <FaTrashCan className={`${edit ? 'text-xl absolute z-20 top-2 left-1 hover:scale-105 cursor-pointer' : 'hidden'}`} onClick={()=>dispatch(deleteCard(card.id))} />
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