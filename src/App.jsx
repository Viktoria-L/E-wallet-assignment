import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Root'
import Home from './routes/Home'
import { getUser } from './utils/helper';
import AddCard from './routes/AddCard'
import Cards from './routes/MyCards';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />} loader={getUser}>
      <Route index element={<Home />}></Route>
      <Route path="/cards" element={<Cards />}></Route>      
      <Route path="/add" element={<AddCard />}></Route>      
    </Route>)
  );


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
