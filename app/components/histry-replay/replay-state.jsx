import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styles from './replay-state-style';

const StatePanel = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography
        className={classes.textContainer}
        variant="title"
        classes={{ title: classes.title }}
      >
      HISTORY REPLAY
      </Typography>
      <Typography
        variant="subheading"
        classes={{ subheading: classes.time }}
      >
      12:23 PM
      </Typography>
    </div>
  );
};

StatePanel.propTypes = {
  classes: PropTypes.shape().isRequired,
};


export default withStyles(styles)(StatePanel);
