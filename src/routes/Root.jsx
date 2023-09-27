import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getUser } from '../features/cards/cardSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.cardInStore.cardHolder)

    //API-fetch
    useEffect(() => {
      dispatch(getUser());    
    }, []);

    return (
        <div className="main-div h-screen flex flex-col justify-between">           
            <Header />          
            <div className="flex-grow max-w-screen-xl m-auto">
                <Outlet context={userName} />
            </div>
            <Footer />
        </div>
    )
}

export default Root;