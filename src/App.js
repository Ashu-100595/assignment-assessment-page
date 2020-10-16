import React from 'react';
import { Route,  BrowserRouter, Switch,} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Classroom from './Container/Classroom/Classroom';
import ModulesPage from './Container/ModulesPage/ModulesPage';
import NotFoundPage from './Container/NotFoundPage/NotFoundPage';
import Homepage from './Container/HomePage/Homepage';
import TopicDetail from './Container/TopicDetail/TopicDetail';
import Problems from './Components/Problems/problems'
import Footer from './Components/Footer/footer';


import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard/python" component={TopicDetail} />
        <Route path="/dashboard/python/1" component={Problems} />
        <Route path="/classroom" component={Classroom} />
        <Route path="/modules" component={ModulesPage} />
        <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
