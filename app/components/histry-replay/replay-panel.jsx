import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import StatePanel from './replay-state';
import Command from './replay-command';
import ControlPanel from './replay-control-panel';
import styles from './replay-panel-style';

const ReplayPanel = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container} >
      <div style={{ width: 'calc((100% - 145px) / 2)' }}>
        <StatePanel />
      </div>
      <div>
        <Command />
      </div>
      <div style={{ width: 'calc((100% - 145px) / 2)', display: 'flex', justifyContent: 'flex-end' }}>
        <ControlPanel />
      </div>
    </div>
  );
};

ReplayPanel.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ReplayPanel);
