import React from 'react';
import {Link} from 'react-router-dom';

import classes from './ModuleCard.module.css';

const ModuleCard= (props) => {
    return(
        <Link className={classes.CardWrapper} to={`/weekly-curriculum/${props.CardHeading}`}>         
        <div className={classes.CardContainer}>
            <div className={classes.ModuleThumbnail}>
                <img src={props.thumbnail} alt="module thumbnail" />
            </div>
            <div className={classes.CardHeading}>{props.CardHeading}</div>
            <div className={classes.ModuleFaculty}>
                <img src={props.avatar} alt="avatar" />
                <div>{props.ModuleFaculty}</div>
            </div>
<<<<<<< HEAD
            <div className={classes.modDuration}>{props.duration}</div>
=======
            <div>{props.Duration}</div>
>>>>>>> 51877472a6e61d6a63ae215b6bd5375acb75dce1
        </div>
        </Link>
    )
}

export default ModuleCard;