import React from 'react';
import './Homepage.css';
import Skillcard from '../../Components/SkillCard/skillcard';
import axios from 'axios';

class Homepage extends React.Component{

    state={
        carddata:[]
    }

    componentDidMount(){
        axios.get('https://5f860417c8a16a0016e6a8d5.mockapi.io/homePage')
        .then(response =>{
            this.setState({ carddata: [...response.data] });
            console.log(this.state);
        })
        .catch(err => {
            console.log('card call failed')
        })
    }

    render(){
        return(
        <div className='homePage'> 
            <h1 className='homeHeading'>Practice Arena</h1>
            <p className='homeSubHeading'>All Skills</p>
            <div className='courseWrapper'>
              {
               this.state.carddata.map(item =>{ 
                  return <Skillcard key={item.id} image={item.imgUrl} course={item.course} unit={item.units}/>
               })   
              }
            </div> 
        </div>
        );
    }
}

export default Homepage;