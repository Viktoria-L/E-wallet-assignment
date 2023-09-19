//När detta anrop sker vid start så vill jag ju att all data ska uppdatera
// ett state i cardSlice, typ user och sen lägga in för och efternamn


// ------------ GET RANDOM USER ------------ //
export const getUser = async () => {
    let response = await fetch(`https://randomuser.me/api/`)
    let data = await response.json();
    console.log("hämtat vid refresh av sida randomuser", data)
    
    return data;

}