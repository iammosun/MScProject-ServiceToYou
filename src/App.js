import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage'
import SignUpCustPage from './components/SignUpCustPage'
import SignUpProPage from './components/SignUpProPage'
import FindAProPage from './components/FindAProPage'
import BookConfirmedPage from './components/BookConfirmedPage'
import BookingPage from './components/BookingPage'
import ProDetailsPage from './components/ProDetailsPage'

function App() {
  return (
    <>
      {/* <p>{testDisplay}</p> */}

      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path='loginPage' element={<LoginPage />} />
          <Route path='bookConfirmedPage' element={<BookConfirmedPage />} />
          <Route path='signUpCustPage' element={<SignUpCustPage />} />
          <Route path='signUpProPage' element={<SignUpProPage />} />
          <Route path='proDetailsPage' element={<ProDetailsPage />} />
          <Route path='findAProPage' element={<FindAProPage />} />
          <Route path='bookingPage' element={<BookingPage />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
