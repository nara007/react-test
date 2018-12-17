import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './replay-control-panel-style';
import DatePicker from './replay-custom-datepicker';
import TimePicker from './replay-custom-timepicker';
import Duration from './replay-duration';
import Edit from './replay-edit';

const ControlPanel = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.datetimeContainer}>
        <DatePicker format="DD/MM/YYYY" />
      </div>
      <div className={classes.timeContainer}>
        <TimePicker />
      </div>
      <div className={classes.durationContainer}>
        <Duration />
      </div>

      <div className={classes.editContainer}>
        <Edit />
      </div>

    </div>
  );
};

ControlPanel.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ControlPanel);
