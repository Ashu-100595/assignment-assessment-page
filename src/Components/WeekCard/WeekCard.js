import React from 'react';
import './WeekCard.css';

class WeekCard extends React.Component {
    render() {
      const { title, expand, onClick } = this.props;
      
      return (
        <div>
          <dt className={expand ? 'title is-expanded more' : 'title'} onClick={onClick}>
            {title}
          </dt>
          <dd className={expand ? 'content is-show' : 'content'} onClick={onClick}>
          
            <div className='fliperOutside'> 
              <div className="flip-box">
                 <div className="flip-box-inner">
                     <div className="flip-box-front">
                          <h2>Day - 1 | Intro To Cloud</h2>
                     </div>
                     <div className="flip-box-back">
                          <h2>Session Plan</h2>
                          <h2>Session Recording</h2>
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
  