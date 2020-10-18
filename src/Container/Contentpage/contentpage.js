import React from 'react';
import {Link} from 'react-router-dom';

import WeekCard from '../../Components/WeekCard/WeekCard';
import './content.css';

class Content extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
          block1: false,
          block2: false,
          block3: false,
        };
    }

    toggle = (index) => () => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }

    render(){
    
    // sample input name for cards.    
    const accordionList = [{ title: 'Week 1' }, { title: 'Week 2' }, { title: 'Third Accordion' },{ title: 'Second Accordion' },{ title: 'Second Accordion' },{ title: 'Second Accordion' }];

    return(
        <div className='homePage contentpage'>
            <div className='contentBtn'>
                <button type='button'>Units</button>
                <Link to={`/modules/RB-020420/grades/`}>
                  <button type='button'>Grades</button>
                </Link>
            </div>
            <div className='combModule'>
                <div className='leftContent'>
                    <div className='leftUpper'>
                         <div className='leftHead'>
                             <img src='https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png' alt='logo'/>
                             <h5>Intro to AWS</h5>
                         </div>
                         <p><span>Grades :</span> NA</p>
                         <p><span>Total Attendance : </span>20.0%</p>
                         <p><span>Last Week Attendance :</span> 20.0%</p>
                    </div>
                </div>
                <div className='rightContent'>
                       <div className="container">
                           <h1>Module Plan</h1>
      
                          <dl className="accordion">
                            {
                              accordionList.map((item, index) => (
                              <WeekCard title={item.title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
                              ))
                            }
                          </dl>
                        </div>;
                </div>
            </div>
        </div>
    );
  }
}

export default Content;