import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import SpeedDown from '@material-ui/icons/FastRewind';
import SpeedUp from '@material-ui/icons/FastForward';
import styles from './replay-command-style';
// import Typography from '@material-ui/core/Typography';
// import styles from './replay-state-style';

const Command = (props) => {
  const { classes } = props;
  console.log(classes);
  return (
    <div>
      <IconButton aria-label="play">
        <SpeedDown />
      </IconButton>
      <IconButton aria-label="play">
        <PauseIcon />
      </IconButton>
      <IconButton aria-label="play">
        <SpeedUp />
      </IconButton>
    </div>
  );
};

Command.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Command);
