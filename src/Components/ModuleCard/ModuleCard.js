import React from 'react';
import {Link} from 'react-router-dom';

import classes from './ModuleCard.module.css';

const ModuleCard= () => {
    return(
        <Link className={classes.CardWrapper} to="/weekly-curriculum">         
        <div>
            <div className={classes.ModuleThumnail}>
                <img src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png" alt="module thumbnail" />
            </div>
            <div className={classes.CardHeading}>Intro to AWS</div>
            <div className={classes.ModuleFaculty}>
                <img src="https://assessments.edyoda.com/uploads/static/images/profile_images/rsz_harshith.png" alt="avatar" />
                <div>Harshith</div>
            </div>
            <div>1 Weeks</div>
        </div>
        </Link>
    )
}

export default ModuleCard;