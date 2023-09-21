// ------------ GET RANDOM USER ------------ //
export const getUser = async () => {
    let response = await fetch(`https://randomuser.me/api/`)
    let data = await response.json();
    console.log("API ANROP", data)
  
    return data;

}