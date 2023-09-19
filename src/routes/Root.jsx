import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar";
import { useLoaderData } from "react-router-dom";
import { changeName } from '../features/cards/cardSlice';
import { useDispatch } from 'react-redux';

const Root = () => {
    const data = useLoaderData();
    const dispatch = useDispatch()
    console.log(data.results[0])
    //Använd datan och spara namnet med redux state
  if(data){
    dispatch(changeName(data.results[0]));
    }

    return (
        <div>
            <Navbar />
            <h1>Roooots m outlet under</h1>
            <p>Data med förnamn: {data.results[0]?.name.first}</p>
            <Outlet />
        </div>
    )
}

export default Root;