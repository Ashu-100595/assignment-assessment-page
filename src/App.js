import React from 'react';

import Navbar from './Components/Navbar/Navbar'
import Homepage from './MainContainer/HomePage/Homepage';

import './App.css';
import Footer from './Footer/footer'

function App() {
  return (
    <div className="App">

       <Navbar />
       <Homepage/>
      <Footer/>

    </div>
  );
}

export default App;
