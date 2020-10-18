import React from 'react';
import axios from 'axios';

import Assignments from '../Assignments/Assignments'

import classes from './Grades.module.css';

class Grades extends React.Component {

    state={
        assignmentData : []
    }

    componentDidMount(){        

        axios.get("https://5f8c0fd0c7aadb001605dfac.mockapi.io/myApi")
        .then(async(response) =>{
            let currentModule = response.data.map(item=>{
                console.log(item)
                if( item.module==this.props.match.params.CourseName){
                    console.log(item)
                return item

            }}
            );
            currentModule=await Promise.all(currentModule)
            currentModule=currentModule.filter(x => !!x)
            console.log(currentModule)
            this.setState({assignmentData:[...currentModule[0].Assignments]});
            console.log(this.state.assignmentData)

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
                            <img src="https://assessments.edyoda.com/uploads/static/images/logo.png" alt="Thumbnail" />
                        </div>
                        <div className={classes.ScoreSection}>
                            <div className={classes.CourseName}>{this.props.match.params.CourseName}</div>
                            <div className={classes.Scores}>
                            <div className={classes.Rank}>
                                <div>18</div>
                                <div>Class Rank</div>
                            </div>
                            <div className={classes.Rank}>
                                <div>0.0%</div>
                                <div>Avg Score</div>
                            </div>                            
                        </div>
                        </div>
                    </section>
                    <section className={classes.AssignmentsSection}>
                        {
                            // <Assignments />
                            this.state.assignmentData.map(item=>{
                                console.log(item)
                                return <Assignments key={item.id} id={item.id} title={item.Title} score={item.Score} />
                            })
                        }
                    </section>
                </main>
            </div>
        )
    }
    
}

export default Grades;