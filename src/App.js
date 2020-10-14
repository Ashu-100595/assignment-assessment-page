import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Problems from './Components/Problems/problems'
import Footer from './Components/Footer/footer'
import TopicDetail from './Components/TopicDetail/TopicDetail'

function App() {
  return (
    <div className="App">

       <Navbar />
       <Problems/>
      <Footer/>

    </div>
  );
}

export default App;
