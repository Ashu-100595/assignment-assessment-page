import React from 'react';
import './WeekCard.css';
import {Link} from 'react-router-dom';

class WeekCard extends React.Component {
    render() {
      var { title, expand, onClick, weeknum } = this.props;
      console.log(title, expand, onClick, weeknum)
      return (
        <div>
          <dt className={expand ? 'title is-expanded more' : 'title'} onClick={onClick}>
             Week {weeknum}
          </dt>
          <dd className={expand ? 'content is-show' : 'content'} onClick={onClick}>
          
            <div className='fliperOutside'> 
              <div className="flip-box">
                 <div className="flip-box-inner">
                     <div className="flip-box-front">
                          <h2>{title}</h2>
                     </div>
                     <div className="flip-box-back">
                          <h2><Link to="/session-plan">Session Plan</Link></h2>
                          <h2><Link to="/session-recording">Session Recording</Link></h2>
                     </div>
                 </div>
               </div>
             </div> 

          </dd>
        </div>
      );
      
    }
  }

  export default WeekCard;
  
