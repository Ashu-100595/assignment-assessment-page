import React from 'react';
import axios from 'axios';

import Assignments from '../Assignments/Assignments';

import classes from './Dsa.module.css';

class Dsa extends React.Component {

    state={
        classData : [],
    }

    componentDidMount(){
        axios.get("https://5f8c0fd0c7aadb001605dfac.mockapi.io/data")
        .then(response =>{
            this.setState({classData:[...response.data]});
            console.log(this.state.classData)
        })
        .catch(err=>{
            console.log("API call failed")
        })
        
    }

    render(){
        return(
            <div className={classes.MainContainer}>
                <main className={classes.PageContainer}>
                    <section className={classes.DetailsSection}>
                        <div className={classes.ImageSection}>
                            <img src="https://assessments.edyoda.com/uploads/static/images/DSA130720/MicrosoftTeams-image_1.png" alt="Thumbnail" />
                        </div>
                        <div className={classes.ScoreSection}>
                            <div className={classes.CourseName}>DSA-130720 - Data Structures and Algorithms</div>
                            <div className={classes.Scores}>
                            <div className={classes.Rank}>
                                <div>18</div>
                                <div>Class Rank</div>
                            </div>
                            <div className={classes.Rank}>
                                <div>0.0%</div>
                                <div>Avg Score</div>
                            </div>
                            <div className={classes.Rank}>
                                <div>50</div>
                                <div>SHS</div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className={classes.AssignmentsSection}>
                        {
                            this.state.classData.map(item=>{
                                return <Assignments key={item.id} id={item.id} title={item.Title} score={item.Score} />
                            })
                        }
                    </section>
                </main>
            </div>
        )
    }
    
}

export default Dsa;