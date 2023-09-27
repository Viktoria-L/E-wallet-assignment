import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


export const getUser = createAsyncThunk("cards/getUser", async () => {
  let response = await fetch(`https://randomuser.me/api/`)
  let data = await response.json();
  let userName = data.results[0].name.first + " " + data.results[0].name.last;
  return userName;
})


const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardHolder: "",
    status: null,  
    card: { //PreviewCard placeholder-states
      number: "",
      expiry: "",
      cvc: "",
      
    },
    activeCardId: null,
    cards: [{ 
      number: "4123123456789000",
      expiry: "1203",
      cvc: "564",
      cardHolder: "",
      id: uuidv4(),
      vendor: "VISA",
    }], 
  
    }, 
  reducers: {
    setCardInput: (state, action) => {
      const { field, value } = action.payload;
      state.card[field] = value;
       
    },
     resetCardInput: (state) => {
      state.card = {
        number: "",
        expiry: "",
        cvc: "",
      }},
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    toggleActiveCard: (state, action) => {
      state.activeCardId = action.payload;
      },    
     deleteCard: (state, action) => {
        const targetId = action.payload; // ID att ta bort
        const updatedCards = state.cards.filter(card => card.id !== targetId);
        // Uppdatera state med de kvarvarande korten
        state.cards = updatedCards;
    },
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "Loading user...";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "success!";
      state.cardHolder = action.payload;
      state.cards[0].cardHolder = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "Failed to get user, pls try again :(";
    }
  }
});


export const { setCardInput, addCard, toggleActiveCard, deleteCard, resetCardInput } = cardSlice.actions;
export default cardSlice.reducer;