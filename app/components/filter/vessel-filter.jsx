import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Vessel from '@material-ui/icons/DirectionsBoat';
import Paper from '@material-ui/core/Paper';

const VesselFilter = (props) => {
  console.log(props);

  return (
    <Paper elevation={3} style={{ padding: '0.5vw' }}>
      <Chip
        icon={<Vessel />}
        label="1234"
        onDelete={() => { console.log(this); }}
        variant="outlined"
      />

      <Chip
        icon={<Vessel />}
        label="5678"
        onDelete={() => { console.log(this); }}
      />

      <Chip
        avatar={
          <Avatar>
            <Vessel />
          </Avatar>
        }
        label="9876"
        onDelete={() => { console.log(this); }}
        variant="outlined"
      />

      <Chip
        avatar={
          <Avatar>
            <Vessel />
          </Avatar>
        }
        label="4321"
        onDelete={() => { console.log(this); }}
      />

    </Paper>

  );
};


export default VesselFilter;
