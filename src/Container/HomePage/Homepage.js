import React from 'react';
import './Homepage.css';
import Skillcard from '../../Components/SkillCard/skillcard';

class Homepage extends React.Component{

    render(){
        return(
        <div className='homePage'> 
            <h1 className='homeHeading'>Practice Arena</h1>
            <p className='homeSubHeading'>All Skills</p>
            <div className='courseWrapper'>
               <Skillcard/>
               <Skillcard/>
               <Skillcard/>
               <Skillcard/>
               <Skillcard/>
            </div> 
        </div>
        );
    }
}

export default Homepage;