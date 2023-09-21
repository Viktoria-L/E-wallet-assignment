import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

// export const getRandomUser = createAsyncThunk("cards/getRandomUser", async () => {
//       let response = await axios.get("https://randomuser.me/api");
//       console.log(response);
//       return response.data;
//     })

const randomName = {
  first: "",
  last: "",
 }


const cardSlice = createSlice({
  name: "cards",
  initialState: {
    // randomName: randomName,
    card: { //Förhandsgranskningskort placeholder
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      
    },
    activeCardId: null,
    cards: [{ // En array för att spara flera kreditkort,
      number: "4123123456789000",
      name: "",
      expiry: "1203",
      cvc: "564",
      id: uuidv4(),
      vendor: "VISA",
    }], 
    } , 
  reducers: {
    setCardInput: (state, action) => {
      const { field, value } = action.payload;
      state.card[field] = value;
      console.log(JSON.parse(JSON.stringify(state.card)));  
    },
    addCard: (state, action) => {
      console.log("lägger till kort", action.payload);
      state.cards.push(action.payload);
      console.log(JSON.parse(JSON.stringify(state.cards)));
    },
    toggleActiveCard: (state, action) => {
      console.log("toggleActive payload", action.payload)
      state.activeCardId = action.payload;
      console.log("Redux State efter toggleActiveCard:", JSON.parse(JSON.stringify(state)));
      console.log(JSON.parse(JSON.stringify(state.cards)))
      },    
     deleteCard: (state, action) => {
        console.log("tar bort kort: ", action.payload);
        const targetId = action.payload; // ID att ta bort
        const updatedCards = state.cards.filter(card => card.id !== targetId);
      console.log("updatedCards: ", updatedCards)
        // Uppdatera state med de kvarvarande korten
        state.cards = updatedCards;
    },
    // changeName: (state, action) => {
    //     console.log("ändrar namn", action.payload.name.first);
    //     state.randomName.first = action.payload.name.first;
    //     state.randomName.last = action.payload.name.last;

    //     console.log("från changeName", state.randomName.first + " " + state.randomName.last)
    // },    
  }
});



export const { changeName, setCardInput, addCard, toggleActiveCard, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;