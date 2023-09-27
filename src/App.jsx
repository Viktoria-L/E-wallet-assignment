import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Root';
import Home from './routes/Home';
import AddCard from './routes/AddCard';
import MyCards from './routes/MyCards';
import PageNotFound from './routes/PageNotFound';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route index element={<Home />}></Route>
      <Route path="/cards" element={<MyCards />}></Route>      
      <Route path="/add" element={<AddCard />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>      
    </Route>)
  );

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
