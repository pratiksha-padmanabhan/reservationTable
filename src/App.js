import './App.css';
import  Header from './HeaderFooter/Header.js'
import Hero from './Hero/Hero';
import WeekSpecial from './WeekSpecial/WeekSpecial';
import { Route, Routes, Redirect, withRouter, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import BookingForm from './Booking/BookingForm';
import BookingPage from './Booking/BookingPage';
import Footer from './HeaderFooter/Footer';

function App() {
  return (
    <BrowserRouter> 
    <Header></Header>
    <Routes>
 <Route path='/' element={<> <Hero /> <WeekSpecial /> </>} />
   
    <Route path="/BookingForm" element={<BookingPage/>}></Route>
    </Routes>
    <Footer/>

    </BrowserRouter>
  );
}


export default App;
