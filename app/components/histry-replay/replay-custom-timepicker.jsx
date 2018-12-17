import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TimePicker } from 'material-ui-pickers';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import Clock from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import Typography from '@material-ui/core/Typography';
import styles from './replay-custom-timepicker-style';


const TextField = withStyles(styles)((props) => {
  const { classes, value } = props;
  return (
    <Typography variant="title" className={classes.text}>
      {value}
    </Typography>
  );
});

class CustomTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.openPicker = this.openPicker.bind(this);
  }

  handleDateChange(date) {
    const { callback } = this.props;
    this.setState(
      { selectedDate: date },
      () => {
        callback(date);
      },
    );
  }

  openPicker() {
    this.picker.open();
  }

  render() {
    const { classes, ampm } = this.props;
    const { selectedDate } = this.state;
    return (
      <div className={classes.container}>
        <IconButton
          aria-label="select time"
          onClick={this.openPicker}
        >
          <Clock />
        </IconButton>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimePicker
            label="time picker"
            ampm={ampm}
            ref={(node) => { this.picker = node; }}
            value={selectedDate}
            onChange={this.handleDateChange}
            TextFieldComponent={TextField}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

CustomTimePicker.propTypes = {
  classes: PropTypes.shape().isRequired,
  ampm: PropTypes.bool,
  callback: PropTypes.func,
};

CustomTimePicker.defaultProps = {
  callback: () => {},
  ampm: true,
};


export default withStyles(styles)(CustomTimePicker);
