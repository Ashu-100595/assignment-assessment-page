import React from 'react';
import classes from '../Session Plan/sessionPlan.module.css';

const SessionPlan= () => {
  return(
      <div  className={classes.sessionWrapper}>
          <h2 className={classes.sessHeadding}>Session Plan</h2>
          <div className={classes.topicWrapper}>
              <h3 className={classes.topicHeading}>Topics:</h3>
              <p className={classes.topicSubHeading}>AWS Simple Storage Service</p>
              <div className={classes.optionWrapper}>
                  <p>1. Introduction to S3</p>
                  <p>2. S3 Features</p>
                  <p>3. Create a bucket</p>
                  <p>4. Upload and Download</p>
                  <p>5. Storage Classes</p>
              </div>
          </div>
          <div className={classes.linkWrapper}>
              <h3 className={classes.linkHeading}>Session Link:</h3>
              <p>https://zekelabs.zoom.us/meeting/register/tZYufuChrj8qHNElsq4QJSq6f3rQKQie7WFA</p>
          </div>
          <div className={classes.passWrapper}>
              <h3 className={classes.passHeading}>Meeting Password:</h3>
              <p>AWS-LIVE</p>
          </div>
      </div>
  )
}

export default SessionPlan