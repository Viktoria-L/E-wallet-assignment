import { useEffect, useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useSelector, useDispatch } from 'react-redux'
import { setCardInput, addCard } from "../features/cards/cardSlice";
import { v4 as uuidv4 } from 'uuid';

const AddCard = () => {
    const dispatch = useDispatch();
    const cardState = useSelector((state) => state.cardInStore.card)
    const userName = useSelector((state)=> state.cardInStore.randomName.first + " " + state.cardInStore.randomName.last)
    const newCard = {...cardState, id: uuidv4()};
    
//Focus need to be set here for the flipcard-function
        const [focus, setFocus] = useState('');
        const [selectedCard, setSelectedCard] = useState("");
        const [validationError, setValidationError] = useState(null);


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
 
        // Definiera olika patterns och titles beroende på selectedCard
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
        pattern = ''; // Om inget kort är valt, kan pattern och title vara tomma strängar
        title = '';
        }

        //Ta bort denna useffect sen
        useEffect(()=> {
            console.log("valt kort", selectedCard, pattern)
        }, [selectedCard, newCard])

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            dispatch(setCardInput({ field: name, value }));
        };
    
        return (
                    
            <div>
                <Cards
                cvc={cardState.cvc}
                expiry={cardState.expiry}
                focused={focus}
                name={userName ? userName : cardState.name}
                number={cardState.number}
                />

                <form className="flex flex-col gap-4" onSubmit={handleAddCard}>
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
                placeholder={"Enter Expiry date"}
                onChange={handleInputChange}
                onFocus={e=>setFocus(e.target.name)}
                maxLength="4"
                pattern="\d{4}"
                required
                />

                <input
                type="tel"
                name="cvc"
                value={cardState.cvc}
                placeholder={"Enter Cvc"}
                onChange={handleInputChange}       
                onFocus={e=>setFocus(e.target.name)}
                maxLength="3"
                pattern="\d{3}"
                required
                />
             
                <div className="text-red-600">{validationError}</div>
                <button type="submit">Add card</button>
                </form>

        </div>
          
            
        )
    }
    
    export default AddCard;


    // -----------GAMMAL KOD NEDANFÖR--------------//

    // <h1>Add Card</h1>
    // <div>FÖRHANDSVISNING AV KORT</div>
    // <form>ska jag ha form eller nåt annat
    //     <br />
    //     <label htmlFor="vendor">Select cardvendor: </label>
    //     <select name="vendor">
    //         <option value="mastercard">Mastercard</option>
    //         <option value="visa">Visa</option>
    //         <option value="american express">American Express</option>
    //     </select>
       
    //     <input type="number" placeholder="card number" />
    //     {/* OM API har hämtat en person så ska det namnet stå här automatiskt
    //     och personen skas inte kunna skriva in namn dvs disable rutan */}
    //     <input type="text" placeholder="Card holder" />
    //     <input type="number" name="month" placeholder="expire month"/>
    //     <input type="number" name="year" placeholder="expire year" />
    //     <input type="number" name="ccv" placeholder="CCV" />
    // </form>