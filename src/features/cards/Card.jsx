import Cards from 'react-credit-cards-2';

//Kom ihåg att namnet på kortet ska vara i stora bokstäver toUppercase()

const Card = (card, userName) => {

   // const {cvc, expiry, number, isActive} = card;

    return (
        <div className="card">
           <h1>Hej från card</h1>
            {/* <div onClick={()=>{console.log(card.isActive)}}>
                <p>{isActive}</p> 
                <br />
                <Cards cvc={card.cvc} expiry={card.expiry} name={userName} number={card.number} />
                </div> */}

        </div>
    )
}

export default Card;