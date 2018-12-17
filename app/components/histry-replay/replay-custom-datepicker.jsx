import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import DateRange from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import Typography from '@material-ui/core/Typography';
import styles from './replay-custom-datepicker-style';


const TextField = withStyles(styles)((props) => {
  const { classes, value } = props;
  return (
    <Typography variant="title" className={classes.text}>
      {value}
    </Typography>
  );
});

class CustomDatePicker extends React.Component {
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
    const { classes, format } = this.props;
    return (
      <div className={classes.container}>
        <IconButton
          className={classes.button}
          aria-label="select date"
          onClick={this.openPicker}
        >
          <DateRange />
        </IconButton>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            label="Uncontrolled input"
            format={format}
            ref={(node) => { this.picker = node; }}
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
            TextFieldComponent={TextField}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

CustomDatePicker.propTypes = {
  classes: PropTypes.shape().isRequired,
  format: PropTypes.string,
  callback: PropTypes.func,
};

CustomDatePicker.defaultProps = {
  format: '',
  callback: () => {},
};


export default withStyles(styles)(CustomDatePicker);
