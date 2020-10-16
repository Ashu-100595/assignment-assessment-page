import React from 'react';

import CourseCard from '../../Components/CourseCard/CourseCard';

import classes from './Classroom.module.css';

const Classroom = () => {
    return(
        <div className={classes.MainContainer}>
            <p className={classes.Heading}>Classroom</p>
            <p className={classes.SubHeading}>Your Enrolled Courses</p>
            <div className={classes.CoursesSection}>
                <CourseCard 
                ThumbnailUrl={"https://assessments.edyoda.com/uploads/static/images/RB020420/edyoda_programs.png"}  
                CourseName={"RB-020420 - React Developer Program"}
                />
                <CourseCard 
                ThumbnailUrl={"https://assessments.edyoda.com/uploads/static/images/DSA130720/MicrosoftTeams-image_1.png"} 
                CourseName={"DSA-130720 - Data Structures and Algorithms"}
                />
            </div>
        </div>
    )
}

export default Classroom ;