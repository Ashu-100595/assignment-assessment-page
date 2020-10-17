import React from 'react';
import {Link} from 'react-router-dom';
import './skillcard.css';

const Skillcard = (props) => {
    return(
    
    <div className='courseCard'>
        <Link to={`/dashboard/${props.course}`}>
        <div className='cardSection'>
            <div className='cardLeftPart'>
              <img src={props.image} alt='skilllogo'/>
            </div>
            <div className='cardRightPart'> 
               <h3>{props.course}</h3>
               <p>{props.unit} units</p>
            </div>
        </div>
        </Link>
    </div>
    
    );
}

export default Skillcard;