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
            <div>{props.Duration}</div>
        </div>
        </Link>
    )
}

export default ModuleCard;