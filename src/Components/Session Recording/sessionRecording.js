import React from 'react';
import classes from '../Session Recording/sessionRecording.module.css';
import ReactPlayer from 'react-player'

const SessionRecording= () => {
  return(
      <div className={classes.videoWrapper}>
        <ReactPlayer url="https://vimeo.com/298851742" controls="true" playing="true" className={classes.videoPlayer} />
      </div>
  )
}

export default SessionRecording