import React from 'react';
import {Link} from 'react-router-dom';
import classes from './CourseCard.module.css';

const CourseCard = (props) => {
    return (
        <Link to="/modules">
        <div className={classes.CourseCard}>
            <div className={classes.Thumbnail}>
                <img src={props.ThumbnailUrl} alt="Course Thumbnail"/>
            </div>
            <div className={classes.CourseData}>
                <div className={classes.CourseName}>
                    {props.CourseName}                                    
                </div>
                <div className={classes.CourseUnits}>
                9 Units
                </div>
                                    
            </div>
        </div>
        </Link>
    )
}

export default CourseCard

