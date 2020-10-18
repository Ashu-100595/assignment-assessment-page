import React from 'react';
import axios from 'axios';

import ModuleCard from '../../Components/ModuleCard/ModuleCard';
import axios from 'axios';
import classes from './ModulesPage.module.css';

class ModulesPage extends React.Component {

    state={
       classData : [],
    }

    componentDidMount(){
        axios.get("https://5efbca1c80d8170016f76869.mockapi.io/shoplaneOrder")
        .then(response =>{
            this.setState({classData:[...response.data]});
            console.log(this.state.classData)
        })
        .catch(err=>{
            console.log("API call failed")
        })
    }
    render(){
        return (

        <div className={classes.MainContainer}>
            <main className={classes.PageContainer}>
                <section className={classes.ImageSection}>
                    <div className={classes.BackgroundWrapper}>
                        <img src="https://assessments.edyoda.com/static/images/Only-Image.jpg" alt="edyoda background" />
                    </div>
                    <div className={classes.CourseInfo}>
                        <div className={classes.CourseName}>
                            <div>
                                RB-020420 - React Developer Program
                            </div>
                            <div>RB020420</div>
                        </div>
                        <div className={classes.CourseDuration}>
                            <div>
                                <div className={classes.Modules}>
                                    <img src="https://assessments.edyoda.com/static/images/Playlist%20Icon.png" alt="module png" className={classes.ModulesImage}/>
                                    <div className={classes.ModuleCount}>
                                        <div>5</div>
                                        <div>Modules</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={classes.Modules}>
                                    <img src="https://assessments.edyoda.com/static/images/Clock%20Icon.png" alt="module png" className={classes.ClockImage} />
                                    <div className={classes.ModuleCount}>
                                        <div>20</div>
                                        <div>Weeks</div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </section>
                <section className={classes.Progress}>
                    <div className={classes.ModulesHeading}>Program Progress</div>
                    <div className={classes.Scores}>
                        <div className={classes.Rank}>
                            <div>1</div>
                            <div>Class Rank</div>
                        </div>
                        <div className={classes.Rank}>
                            <div>100.0%</div>
                            <div>Avg Score</div>
                        </div>
                        <div className={classes.Rank}>
                            <div>89.28</div>
                            <div>SHS</div>
                        </div>
                    </div>
                </section>
                <section className={classes.ModulesSection}>
                    <div className={classes.ModulesHeading}>Modules</div>
                </section>
                <section>
                    <div className={classes.ModuleCardWrapper}>
                        {
                            this.state.classData.map(item =>{
                               return <ModuleCard key={item.id} thumbnail={item.Thumbnail} CardHeading={item.Title} ModuleFaculty={item.Instructor} avatar={item.Avatar} Duration={item.Duration} />
                            })
                        }                        

                    </div>
                </section>
            </main>
        </div>
    )
  }
}
}

export default ModulesPage;