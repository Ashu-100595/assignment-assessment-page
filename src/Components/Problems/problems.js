import React, {Component} from 'react';
import classes from '../Problems/problems.module.css';
import axios from 'axios'



class LandingSection extends React.Component{

state={
  probData:[]
}

componentDidMount(){
    axios.get('https://5f87684649ccbb00161774c5.mockapi.io/PracticeArena')
    .then(async(response)=>{
    let Probs =await response.data.map(async item=>{
     
        if( item.CourseName==this.props.match.params.CourseName){
         return await item.Topics.map(x=>{
            if(x.Sno==this.props.match.params.id){
                return x
            }
          })
    }}
           
        );
        Probs=await Promise.all(Probs)
        Probs=Probs.filter(x => !!x)
        console.log(Probs)
        this.setState({probData:Probs[0][this.props.match.params.id-1].Problems})
        //this.setState({logo:Topics[0].Logo})
        
    })
    .catch((err) =>{
        console.log("error")
    })
    
}

render()
{
    console.log(this.state.probData)
    return   <section className={classes.probPage}>
                    <h2 className={classes.Heading}>Problems</h2>
                    <div className={classes.proOut}> 
                  
                          
                              {

                                  this.state.probData&&this.state.probData.map(item=>{
                                      return(
                                        <div className={classes.longCard}>
                                        <div className={classes.probsWrapper}>
                                        <p className={classes.Probs}>Problem {item.Position}</p>
                                        </div>
                                        <div className={classes.Desc}>
                                            <p className={classes.Upperdesc}>{item.Title}</p>
                                            <p className={classes.Middesc}>Level:{item.Level}</p>
                                            <p className={classes.Lowerdesc}>Max Score:{item.MaxScore}</p>
                                        </div>
                                        <div className={classes.subbtnWrapper}>
                                            <p className={classes.subBtn}>Solve Problem</p>
                                        </div>
                                        </div>
                                      )
                                  })
                              }
                          
                      
                  
              </div>
             </section>  
}
                
}

export default LandingSection
