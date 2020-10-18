import React from 'react';
import axios from 'axios';
import WeekCard from '../../Components/WeekCard/WeekCard';
import './content.css';


class Content extends React.Component{

    
        state = {
          block1: false,
          block2: false,
          block3: false,
          week:[],
        };
    

    componentDidMount(){
      const params= this.props.match.params.Coursetitle;
      console.log(params);
      axios.get('https://5ee248e08b27f300160948a4.mockapi.io/video/week')
      .then(response =>{
           const resp= response.data[0].details.Modules;
           console.log(resp)
          for(var i =0; i<resp.length; i++){
            if(params === resp[i].Title){
              this.setState({week: [resp[i].Units[0].ModulePlan]})
              this.setState({cardData: resp[i].Thumbnail})
              this.setState({grades: [resp[i].Units[0].Grades]})
              this.setState({last: [resp[i].Units[0].LastWeekAttendance]})
              this.setState({total: [resp[i].Units[0].TotalAttendance]})
              //console.log(this.state.week[0].ModulePlan[0].weekplan);
              console.log(this.state.week)
            }
          }
      })
      .catch(err => {
          console.log('card call failed')
      })
  }


    toggle = (index) => () => {
        this.setState({ [`block${index}`]: !this.state[`block${index}`] });
    }

    render(){
    
    // sample input name for cards.    
    //const accordionList = [{ title: 'Week 1' }, { title: 'Week 2' }, { title: 'Third Accordion' },{ title: 'Second Accordion' },{ title: 'Second Accordion' },{ title: 'Second Accordion' }];
    var accordionList= this.state.week;
    //console.log(accordionList)

    return(
        <div className='homePage contentpage'>
            <div className='contentBtn'>
                <button type='button'>Units</button>
                <button type='button'>Grades</button>
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
                              accordionList.map((item, index) => (
                              <WeekCard key={item.id} weeknum={item.id} title={item.Title} onClick={this.toggle(index + 1)} expand={this.state[`block${index+1}`]} />
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