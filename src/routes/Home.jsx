import CardList from "../features/cards/CardList";

const Home = () => {

    // kör en showState här med tillhörande knapp att visa kort , kanske som 
    //en underkomponent? eller som en knapp med länk
    //Ska jag köra knappar till alla kort eller till add eller ba länka ut kort direkt

    return (
        <div>
            <h1>Hem</h1>
            
            <CardList />
       
        </div>
    )
}

export default Home;


