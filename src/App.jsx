import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Button from 'react-bootstrap/Button';
import './App.css'
import CandyCarousel from './components/CandyCarousel';
import './index.css'
import NavBar from './components/NavBar';
import Candies from './components/Candies';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <NavBar />
    <Header />
    <CandyCarousel/>
    <Candies />
    {/* <h1 style = {{color:'#FF4E0D'}}>Orange</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    {/* <Button style={{color:'yellow'}}>New Button </Button>

       */}
    </>
  )
}

export default App
