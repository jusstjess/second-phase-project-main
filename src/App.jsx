import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import './App.css'
import './index.css'
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import ShopNow from "./components/pages/ShopNow";
import { Carousel } from "react-bootstrap";


function App() {
  return (
  
     <>     
     <NavBar />
     <Header /> 
     <Carousel/>
     <div>
      <Routes>  
        <Route path = '/' element ={<Home/>}/>
        <Route path = "/ShopNow" element = {<ShopNow/>}/>
        <Route path = "/Cart" element ={<Cart/>}/>
        <Route path = "/ContactUs" element ={<ContactUs/>} />
      </Routes>
      </div> 
      </>
  )
}

export default App
