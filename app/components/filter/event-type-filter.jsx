import React from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
// import FaceIcon from '@material-ui/icons/Face';
import Event from 'mdi-material-ui/Eventbrite';

const EventTypeFilter = (props) => {
  console.log(props);

  return (
    <Paper elevation={3} style={{ padding: '0.5vw' }}>
      <Chip
        icon={<Event />}
        label="Way point"
        onDelete={() => { console.log(this); }}
    //   className={classes.chip}
    //   style={{ backgroundColor: 'lightgray' }}
      />

      <Chip
        icon={<Event />}
        label="At berth"
        onDelete={() => { console.log(this); }}
        variant="outlined"
      />

      <Chip
        avatar={
          <Avatar>
            <Event />
          </Avatar>
        }
        label="Pilot on board"
        onDelete={() => { console.log(this); }}
        variant="outlined"
      />

      <Chip
        avatar={
          <Avatar>
            <Event />
          </Avatar>
        }
        label="Port out"
        onDelete={() => { console.log(this); }}
      />

    </Paper>

  );
};


export default EventTypeFilter;

