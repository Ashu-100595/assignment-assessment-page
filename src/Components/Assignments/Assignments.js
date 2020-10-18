import React from 'react';

import classes from './Assignments.module.css';

const Assignments = (props) => {
    return(
        <div className={classes.Assignments}>
            <div>
            <div>{props.id}</div>
            <div>{props.title}</div>
            </div>                        
            <div>{props.score}</div>
        </div>
    )
}

export default Assignments;