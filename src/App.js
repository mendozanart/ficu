import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './componentes/navigation/Navbar';
import Home from './componentes/home/Home'
import Nosotros from './componentes/nosotros/Nosotros'
import Eventos from './componentes/eventos/Eventos'
import Pcontacto from './componentes/contacto/Pcontacto'
import Artistas from './componentes/artistas/Artistas'
import Footer from './componentes/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='*' element={<Home/>}/> 
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/eventos' element={<Eventos/>}/>
      <Route path='/artistas' element={<Artistas/>}/>
      <Route path='/contacto' element={<Pcontacto/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
