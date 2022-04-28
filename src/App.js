import React from 'react'
import Navbar from './componentes/navigation/Navbar';
import Home from './componentes/home/Home'
import Footer from './componentes/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
