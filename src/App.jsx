import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';


import Navbar from "./components/Navbar";
import Home from './views/Home';
import Destinations from './components/Destinations';
import Foods from './components/Foods';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Vitalis from "./views/Vitalis";
import Sangbay from "./views/Sangbay";
import Baluarte from "./views/Baluarte";
import SusoBeach from "./views/SusoBeach";
import Skyline from "./views/Skyline";
import Port from "./views/Port";
import Calle from "./views/Calle";
import BlackSand from "./views/BlackSand";

import Bagnet from "./views/Bagnet";
import Empanada from "./views/Empanada";
import Longganisa from "./views/Longganisa";
import Kalamay from "./views/Kalamay";
import Pinakbet from "./views/Pinakbet";
import Chichacorn from "./views/Chichacorn";

function App() {

  return (
    <div className='App'>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/destinations" element={<Destinations />}/>
            <Route path="/foods" element={<Foods />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/footer" element={<Footer />}/>
            <Route path="/vitalis" element={<Vitalis />}/>
            <Route path="/sangbay" element={<Sangbay />}/>
            <Route path="/baluarte" element={<Baluarte />}/>
            <Route path="/susobeach" element={<SusoBeach />}/>
            <Route path="/skyline" element={<Skyline />}/>
            <Route path="/port" element={<Port />}/>
            <Route path="/calle" element={<Calle />}/>
            <Route path="/blacksand" element={<BlackSand />}/>
            <Route path="/bagnet" element={<Bagnet />}/>
            <Route path="/empanada" element={<Empanada />}/>
            <Route path="/longganisa" element={<Longganisa />}/>
            <Route path="/kalamay" element={<Kalamay />}/>
            <Route path="/pinakbet" element={<Pinakbet />}/>
            <Route path="/chichacorn" element={<Chichacorn />}/>
        </Routes>
    </div>
  )
}

export default App
