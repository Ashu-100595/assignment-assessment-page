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
               <Skillcard name="Python" img="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png" units="101"/>
               <Skillcard name="Databases" img="https://assessments.edyoda.com/uploads/static/images/DBMS/database.png" units="0"/>
               <Skillcard name="Django" img="https://assessments.edyoda.com/uploads/static/images/DJANGO/DJ_Logo.png" units="0"/>
               <Skillcard name="Javascript" img="https://assessments.edyoda.com/uploads/static/images/JAVASCRIPT/JS_Logo.png" units="20"/>
               <Skillcard name="Data Structures" img="https://assessments.edyoda.com/uploads/static/images/DS/dsa.png" units="37"/>
               <Skillcard name="React" img="https://assessments.edyoda.com/uploads/static/images/REACT/React_qmXOJwj.webp" units="0"/>
               <Skillcard name="Algorithms" img="https://assessments.edyoda.com/uploads/static/images/ALGO/algorithm_2.png" units="36"/>
            </div> 
        </div>
        );
    }
}

export default Homepage;