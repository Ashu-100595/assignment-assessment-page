import React from 'react';
import { Route,  BrowserRouter, Switch,} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Classroom from './Container/Classroom/Classroom';
import ModulesPage from './Container/ModulesPage/ModulesPage';
import Dsa from './Components/Dsa/Dsa';
import Grades from './Components/Grades/Grades';
import NotFoundPage from './Container/NotFoundPage/NotFoundPage';
import Homepage from './Container/HomePage/Homepage';
import TopicDetail from './Container/TopicDetail/TopicDetail';
import Problems from './Components/Problems/problems';
import Content from './Container/Contentpage/contentpage';
import SessionPlan from './Components/Session Plan/sessionPlan'
import SessionRecording from './Components/Session Recording/sessionRecording'
import Footer from './Components/Footer/footer';

import './App.css';


class App extends React.Component{

  state = {
      data: []
  }

 componentDidMount(){
   axios.get('https://5f87684649ccbb00161774c5.mockapi.io/PracticeArena')
   .then(response => {
     
      this.setState({data:{...response.data}})
      //console.log(this.state.data[0].Python.Topics[0].Date);
      console.log(this.state.data);   
     
   })
   .catch(err =>{
     console.log('Data fetching failed !!');
   })
 }

  render(){ 
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard/:CourseName" component={TopicDetail} />
        <Route path="/dashboard/:CourseName/:id" component={Problems} />
        <Route path="/classroom" component={Classroom} />
        <Route exact path="/modules/RB-020420" component={ModulesPage} />
        <Route exact path="/modules/RB-020420/grades" component={Grades} />
        <Route path="/modules/DSA-130720" component={Dsa} />
        <Route path="/weekly-curriculum" component={Content} />
        <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
