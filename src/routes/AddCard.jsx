import { useEffect, useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useSelector, useDispatch } from 'react-redux'
import { setCardInput, addCard } from "../features/cards/cardSlice";
import { v4 as uuidv4 } from 'uuid';
import { useOutletContext } from "react-router-dom";


const AddCard = () => {
    //Focus need to be set here for the flipcard-function
    const [focus, setFocus] = useState('');
    const [selectedCard, setSelectedCard] = useState("");
    const [validationError, setValidationError] = useState(null);
    let userName = useOutletContext();


    const dispatch = useDispatch();
    const allCards = useSelector((state) => state.cardInStore.cards)
    const cardState = useSelector((state) => state.cardInStore.card)
    //const userName = useSelector((state)=> state.cardInStore.randomName.first + " " + state.cardInStore.randomName.last)
    const newCard = {...cardState, vendor: selectedCard, id: uuidv4()};
    
    console.log("allcards", allCards.length)
        const validateForm = () => {
            if (!selectedCard) {
                setValidationError("Please select a card vendor.");
                return false;
            }
            if (!cardState.number || !cardState.expiry || !cardState.cvc) {
                setValidationError("Please fill in all required fields.");
                return false;
            }
            setValidationError(null);
            return true;
        };
    
        const handleAddCard = (e) => {
            e.preventDefault();
            if (validateForm()) {
                dispatch(addCard(newCard));
            }
        };

        const handleSelectedCard = (e) => {
            setSelectedCard(e.target.value);
        }
 
        // Change pattern and title depending on selectedCard
        let pattern, title;
        if (selectedCard === 'visa') {
        pattern = "4\\d{15}";
        title = 'Enter Visa card number (16 digits starting with 4)';
        } else if (selectedCard === 'mastercard') {
        pattern = '(51|52|53|54|55)\\d{14}';
        title = 'Enter MasterCard card number (16 digits starting with 51/52/53/54 or 55)';
        } else if (selectedCard === 'american express') {
        pattern = '(34|37)\\d{14}';
        title = 'Enter American Express card number (16 digits starting with 34 or 37)';
        } else {
        pattern = '';
        title = '';
        }

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            dispatch(setCardInput({ field: name, value }));
        };
    
        return (
        
            <>
            {allCards.length < 4 ? 
            <div className="">
                <Cards
                cvc={cardState.cvc}
                expiry={cardState.expiry}
                focused={focus}
                name={userName ? userName : cardState.name}
                number={cardState.number}
                />

                <form className="flex flex-col gap-4 text-black" onSubmit={handleAddCard}>
                <div className="">
               
                <label htmlFor="vendor">VISA</label>
                <input type="radio" name="vendor" value="visa" onChange={handleSelectedCard} />
                <label htmlFor="vendor">Mastercard</label>
                <input type="radio" name="vendor" value="mastercard" onChange={handleSelectedCard}/>
                <label htmlFor="vendor">American Express</label>
                <input type="radio" name="vendor" value="american express" onChange={handleSelectedCard} />
                {!selectedCard && (
                <div className="text-red-600">Please select a card vendor.</div>
                )}
                </div>
                
                <input
                type="tel"
                name="number"
                value={cardState.number}
                placeholder={"Enter Card Number"}
                onChange={handleInputChange}
                onFocus={e=>setFocus(e.target.name)}
                pattern={pattern}
                title={title}
                maxLength="16"
                required
                />

                <input
                type="text"
                name="name"
                value={cardState.name}
                placeholder={userName? userName : "Enter Name"}
                onChange={handleInputChange}        
                onFocus={e=>setFocus(e.target.name)}
                readOnly={userName && 'readonly'}
                required
                />

                <input
                type="tel"
                name="expiry"
                value={cardState.expiry}
                placeholder={"MM/YY"}
                onChange={handleInputChange}
                onFocus={e=>setFocus(e.target.name)}
                maxLength="4"
                pattern="[0-1][0-9][0-9][0-9]"
                required
                />

                <input
                type="tel"
                name="cvc"
                value={cardState.cvc}
                placeholder={"Enter CVC"}
                onChange={handleInputChange}       
                onFocus={e=>setFocus(e.target.name)}
                maxLength="3"
                pattern="\d{3}"
                required
                />
             
                <div className="text-red-600">{validationError}</div>
                <button type="submit" className="text-white">Add card</button>
                </form>

            </div>
            : <p>Du har för många kort, lägg till komponent här</p>    }
          
            </>
        )
    }
    
    export default AddCard;