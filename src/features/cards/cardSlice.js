import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    randomName: randomName,
    card: { //Förhandsgranskningskort placeholder
      number: "",
      name: randomName.first + randomName.last,
      expiry: "",
      cvc: "",
      // focus: "",
    },
    cards: [{ // En array för att spara flera kreditkort,
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
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
    // deleteTodo: (state, action) => {
    //     console.log("tar bort todo");
    //     state.todos.splice(i === action.payload, 1);
    // },
    changeName: (state, action) => {
        console.log("ändrar namn", action.payload.name.first);
        state.randomName.first = action.payload.name.first;
        state.randomName.last = action.payload.name.last;

        console.log("från changeName", state.randomName.first + " " + state.randomName.last)
      },    
  }
});

export const { changeName, setCardInput, addCard } = cardSlice.actions;

export default cardSlice.reducer;