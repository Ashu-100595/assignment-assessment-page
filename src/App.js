import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Homepage from './MainContainer/HomePage/Homepage';
import TopicDetail from './MainContainer/HomePage/TopicDetail/TopicDetail';

import Footer from './Footer/footer'

function App() {
  return (
    <div className="App">

       <Navbar />
       <TopicDetail/>
      <Footer/>

    </div>
  );
}

export default App;
