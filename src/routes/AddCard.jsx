import { useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useSelector, useDispatch } from 'react-redux'
import { setCardInput, addCard, resetCardInput } from "../features/cards/cardSlice";
import { v4 as uuidv4 } from 'uuid';
import { useOutletContext } from "react-router-dom";
import { MaxCards } from '../features/cards/MaxCards'


const AddCard = () => {
    const [focus, setFocus] = useState('');
    const [selectedCard, setSelectedCard] = useState("");
    const [validationError, setValidationError] = useState(null);
    const [infoMsg, setInfoMsg] = useState("");
    let userName = useOutletContext();

    const dispatch = useDispatch();
    const allCards = useSelector((state) => state.cardInStore.cards)
    const cardState = useSelector((state) => state.cardInStore.card)
    const newCard = {...cardState, cardHolder: userName, vendor: selectedCard, id: uuidv4()};

        const validateForm = () => {
            if (!selectedCard) {
                setValidationError("Please select a card vendor.");
                setTimeout(function() {
                    setValidationError("");
                }, 5000);
                return false;
            }
            if (!cardState.number || !cardState.expiry || !cardState.cvc) {
                setValidationError("Please fill in all required fields.");
                console.log("error")
                return false;
            }
            setValidationError(null);
            return true;
        };
    
        const handleAddCard = (e) => {
            e.preventDefault();
            if (validateForm()) {
                dispatch(addCard(newCard));
                dispatch(resetCardInput()); // Reset the input fields
                setInfoMsg("You added a new card!");
                setTimeout(function() {
                    setInfoMsg("");
                }, 5000);
                }
        };

        const handleSelectedCard = (e) => {
            setSelectedCard(e.target.value);
        }
 
        // Change pattern, title, placeholder depending on selectedCard
        let pattern, title, placeholder;
        if (selectedCard === 'visa') {
        pattern = "4\\d{15}";
        title = 'Visa number (16 digits starting with 4)';
        placeholder = "4XXX XXXX XXXX XXXX"
        } else if (selectedCard === 'mastercard') {
        pattern = '(51|52|53|54|55)\\d{14}';
        title = 'MasterCard number (16 digits starting with 51/52/53/54 or 55)';
        placeholder = "51XX XXXX XXXX XXXX"
        } else if (selectedCard === 'american express') {
        pattern = '(34|37)\\d{14}';
        title = 'American Express number (16 digits starting with 34 or 37)';
        placeholder = "34XX XXXX XXXX XXXX"
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
            <div className="flex flex-col items-center mt-4 md:mt-20">
                <h2 className="mb-8 font-bold text-center text-2xl">Add new card</h2>
               
                <Cards
                cvc={cardState.cvc}
                expiry={cardState.expiry}
                focused={focus}
                name={userName ? userName : cardState.name}
                number={cardState.number}
                />

                <form className="flex flex-col m-4 max-w-290" onSubmit={handleAddCard}>

                <div className="flex gap-1 mb-4 mt-4 justify-center text-sm font-bold">               
                <label htmlFor="visa">VISA</label>
                <input type="radio" name="vendor" id="visa" value="visa" className="accent-purple-600" onChange={handleSelectedCard} />
                <label htmlFor="mastercard">Mastercard</label>
                <input type="radio" name="vendor" id="mastercard" value="mastercard" className="accent-purple-600" onChange={handleSelectedCard}/>
                <label htmlFor="americanexpress">American Express</label>
                <input type="radio" name="vendor" id="americanexpress" value="american express" className="accent-purple-600" onChange={handleSelectedCard} />
                </div>

                <label htmlFor="cardnumber" className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Card number</label>
                <input
                className="bg-gray-50 max-w-290 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
                type="tel"
                id="cardnumber"
                name="number"
                value={cardState.number}
                placeholder={placeholder}
                onChange={handleInputChange}
                onFocus={e=>setFocus(e.target.name)}
                pattern={pattern}
                title={title}
                maxLength="16"
                required
                disabled={!selectedCard && 'disabled'}
                />

                <label htmlFor="username" className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Cardholder</label>
                <input
                className="bg-gray-50 max-w-290 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
                type="text"
                id="username"
                name="name"
                value={userName? userName : cardState.name}
                placeholder={userName? userName : "Enter Name"}
                onChange={handleInputChange}        
                onFocus={e=>setFocus(e.target.name)}
                readOnly={userName && 'readonly'}                
                disabled={userName && 'disabled'}
                />

                <div className="flex gap-4 max-w-290">
                    <div>
                        <label htmlFor="expiration" className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">Expiration date</label>
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
                        type="tel"
                        id="expiration"
                        name="expiry"
                        value={cardState.expiry}
                        placeholder={"MM/YY"}
                        onChange={handleInputChange}
                        onFocus={e=>setFocus(e.target.name)}
                        maxLength="4"
                        pattern="[0-1][0-9][0-9][0-9]"
                        required
                        disabled={!selectedCard && 'disabled'}

                        />
                    </div>
                    <div>

                        <label htmlFor="cvc" className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">CVC/CVV</label>
                        <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-transparent dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-600 dark:focus:border-purple-600"
                        type="tel"
                        name="cvc"
                        id="cvc"
                        value={cardState.cvc}
                        placeholder={"Enter CVC"}
                        onChange={handleInputChange}       
                        onFocus={e=>setFocus(e.target.name)}
                        maxLength="3"
                        pattern="\d{3}"
                        required
                        disabled={!selectedCard && 'disabled'}

                        />
                    </div>
                </div>
                <div className="text-red-600 mt-4 text-center text-sm">{validationError}</div>
                <button type="submit" className='max-w-290 h-8 flex justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-lg text-md text-center mt-4'>Add card</button>
                </form>
                <div className="mt-4 text-center text-sm">{infoMsg}</div>

            </div>
            : <MaxCards / >}
          
            </>
        )
    }
    
    export default AddCard;