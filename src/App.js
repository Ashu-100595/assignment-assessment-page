import React from 'react';
import { Route,  BrowserRouter, Switch,} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Classroom from './Container/Classroom/Classroom';
import NotFoundPage from './Container/NotFoundPage/NotFoundPage';
import Homepage from './Container/HomePage/Homepage';
import TopicDetail from './Components/TopicDetail/TopicDetail';

import './App.css';

import Footer from './Components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/dashboard/python" component={TopicDetail} />
        <Route path="/classroom" component={Classroom} />
        <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
