import React from 'react';
import {Link} from 'react-router-dom';
import './skillcard.css';

const Skillcard = () => {
    return(
    
    <div className='courseCard'>
        <Link to="./dashboard/python">
        <div className='cardSection'>
            <div className='cardLeftPart'>
              <img src='https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png' alt='skilllogo'/>
            </div>
            <div className='cardRightPart'> 
               <h3>Python</h3>
               <p>101 units</p>
            </div>
        </div>
        </Link>
    </div>
    
    );
}

export default Skillcard;