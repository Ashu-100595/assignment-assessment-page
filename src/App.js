import React from 'react';
import { Route,  BrowserRouter, Switch,} from 'react-router-dom';


import Navbar from './Components/Navbar/Navbar';
import Classroom from './Container/Classroom/Classroom';
import NotFoundPage from './Container/NotFoundPage/NotFoundPage';

import './App.css';
import Footer from './Footer/footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/classroom" component={Classroom} />
        <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
