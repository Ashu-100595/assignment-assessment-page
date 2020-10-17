import React from 'react';
import { Route,  BrowserRouter, Switch,} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import Classroom from './Container/Classroom/Classroom';
import ModulesPage from './Container/ModulesPage/ModulesPage';
import NotFoundPage from './Container/NotFoundPage/NotFoundPage';
import Homepage from './Container/HomePage/Homepage';
import TopicDetail from './Container/TopicDetail/TopicDetail';
import Problems from './Components/Problems/problems';
import Content from './Container/Contentpage/contentpage';
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
        <Route path="/dashboard/python/1" component={Problems} />
        <Route path="/classroom" component={Classroom} />
        <Route path="/modules" component={ModulesPage} />
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
