import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/navigation/Navbar';
import Home from './componentes/home/Home'
import Pcontacto from './componentes/contacto/Pcontacto'
import Footer from './componentes/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='*' element={<Home/>}/> 
      <Route path='/pcontacto' element={<Pcontacto/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
