import React from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

import WeekCard from '../../Components/WeekCard/WeekCard';
import './content.css';


class Content extends React.Component{

    
        state = {
          block1: false,
          block2: false,
          block3: false,
          week:[],
          moduleName:[]
        };
    

    componentDidMount(){
      const params= this.props.match.params.CardHeading;

      console.log(params);
      axios.get('https://5f87684649ccbb00161774c5.mockapi.io/WeeklyData')
      .then(response =>{
           const resp= response.data[0].details.Modules;
           //console.log(resp)
          resp.map(item=>{
           // console.log(item)
           //console.log(item.Title)
           //console.log(item.Units.WeeklyPlan)
            if(params == item.Title){
              console.log(item.Units.WeeklyPlan)
               this.setState({
                              week: [item.Units.WeeklyPlan],
                              cardData: item.Thumbnail,
                              grades: [item.Units.Grades],
                              last: [item.Units.LastWeekAttendance],
                              total: [item.Units.TotalAttendance],
                              moduleName: [params]
                             });
            //console.log(this.state.week[0].WeeklyPlan[0].weekplan);
            //  console.l og()
            }
          }
          )
      })
      .catch(err => {
          console.log('card call failed')
      })
  }


    toggle = (index) => () => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }

    render(){
    console.log(this.state.week)
    // sample input name for cards.    
    var x = {...this.state.week}
    //const accordionList = [{ title: 'Week 1' }, { title: 'Week 2' }, { title: 'Third Accordion' },{ title: 'Second Accordion' },{ title: 'Second Accordion' },{ title: 'Second Accordion' }];
    console.log(x)
    var accordionList= {};
    Object.entries(this.state.week).map((key)=> {
        accordionList=key[1].weekplan
    
    }) 
   console.log(accordionList.weekplan)
    return(
        <div className='homePage contentpage'>
            <div className='contentBtn'>
                <button type='button'>Units</button>
                <Link to={`/modules/RB-020420/grades/${this.state.moduleName[0]}`}>
                  <button type='button'>Grades</button>
                </Link>
            </div>
            <div className='combModule'>
                <div className='leftContent'>
                    <div className='leftUpper'>
                         <div className='leftHead'>   
                                    <img src={this.state.cardData} alt='logo'/>
                                    <h5>{this.props.match.params.Coursetitle}</h5> 
                         </div>
                         <p><span>Grades :</span> {this.state.grades}</p>
                         <p><span>Last Week Attendance : </span>{this.state.last}</p>
                         <p><span>Total Attendance :</span> {this.state.total}</p>
                    </div>
                </div>
                <div className='rightContent'>
                       <div className="container">
                           <h1>Module Plan</h1>
                            
                          <dl className="accordion">
                             {
                               accordionList.length>0 && 
                              accordionList.map((item, index) => {
                               console.log(item.Title)
                                return   (
                              <WeekCard key={item.id} weeknum={item.id} title={item.Title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
                              )})
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