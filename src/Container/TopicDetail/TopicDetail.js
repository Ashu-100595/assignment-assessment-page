import Axios from 'axios';
import React, {Component} from 'react';
import './TopicDetail.css';
import {Link} from 'react-router-dom'



class TopicDetail extends React.Component {

    state={
        topic:[],
        logo:''
    }

    componentDidMount(){
        Axios.get('https://5f87684649ccbb00161774c5.mockapi.io/PracticeArena')
        .then(async(response)=>{
            console.log(response)
        let Topics = response.data.map(item=>{
            console.log(item)
            if( item.CourseName==this.props.match.params.CourseName){
            return item
        }}
               
            );
            Topics=await Promise.all(Topics)
            Topics=Topics.filter(x => !!x)
            console.log(Topics)
            this.setState({topic:Topics[0].Topics})
            this.setState({logo:Topics[0].Logo})
            
        })
        .catch((err) =>{
            console.log("error")
        })
        
    }
    

    render(){
        const {topic,logo} = this.state
      console.log(topic)
      console.log(logo)
        return(
        <div className='homePage'>
            <div className='logoSection'>
                <img src={logo} alt='skilllogo'/>
                <div>
                    <h2>
                        {this.props.match.params.CourseName}
                    </h2>
                    <h3>0.0%</h3>
                    <p>Avg. Score</p>
                </div>
            </div>
            <div>
            <table className='ProTable highlight'>
                 <thead>
                     <tr>
                         <th>SNo.</th>
                         <th>Content</th>
                         <th>Status</th>
                     </tr>
                 </thead>
                 <tbody>
                    {topic&&topic.map(item=>{
                        console.log(item)
                     return(
                        
                        <tr>
                        <td>{item.Sno}</td>
                        <td ><Link to={`/dashboard/${this.props.match.params.CourseName}/${item.Sno}`}>{item.Title}</Link></td>
                        <td className={item.Marks=='Pending'?'pending':''}>{item.Marks}</td>
                        </tr>
                        
                     )
                    })} 
                    
                  </tbody>
            </table>
            </div>
        </div>
    );
} 
}

export default TopicDetail;