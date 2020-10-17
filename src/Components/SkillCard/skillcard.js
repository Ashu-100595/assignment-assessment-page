import React from 'react';
import {Link} from 'react-router-dom';
import './skillcard.css';

const Skillcard = (props) => {
    return(
    
    <div className='courseCard'>
        <Link to={`./dashboard/${props.name}`}>
        <div className='cardSection'>
            <div className='cardLeftPart'>
              <img src={props.img} alt='skillLogo'/>
            </div>
            <div className='cardRightPart'> 
               <h3>{props.name}</h3>
               <p>{props.units} units</p>
            </div>
        </div>
        </Link>
    </div>
    
    );
}

export default Skillcard;