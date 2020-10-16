import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Homepage from './MainContainer/HomePage/Homepage';
import Content from './MainContainer/Contentpage/contentpage';
import TopicDetail from './MainContainer/TopicDetail/TopicDetail';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">

       <Navbar />
      <Content/>
      <Footer/>

    </div>
  );
}

export default App;
