import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
      
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
     
       <ScrollToTop/>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
