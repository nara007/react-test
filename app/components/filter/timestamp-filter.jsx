import React from 'react';
import Slider from '@material-ui/lab/Slider';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Dimensions from 'react-dimensions';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';


const duration = ['now', 'last 1 hour', 'last 3 hours', 'last 1 Day', 'last 1 Week', 'last 1 Month'];
class TimestampFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value }, () => {
      console.log(duration[this.state.value]);
    });
  }

  render() {
    const { value } = this.state;
    const { containerWidth, classes } = this.props;
    return (
      <div id="niubi" containerWidth={containerWidth} >
        <div
          id="daming"
          style={{
              padding: 0,
            //   boxSizing: 'border-box',
              display: 'flex',
          }}
        >


          <div style={{ marginLeft: '9.09%', width: 'calc(90.9% / 5)', backgroundColor: '' }}>
            <Typography variant="body1" gutterBottom align="center">
                        Last 1 hr
            </Typography>
          </div>
          <div style={{ width: 'calc(90.9% / 5)', backgroundColor: '' }}>
            <Typography variant="body1" gutterBottom align="center">
                        Last 3 hr
            </Typography>
          </div>
          <div style={{ width: 'calc(90.9% / 5)', backgroundColor: '' }}>
            <Typography variant="body1" gutterBottom align="center">
                        Last 1 Day
            </Typography>
          </div>
          <div style={{ width: 'calc(90.9% / 5)', backgroundColor: '' }}>
            <Typography variant="body1" gutterBottom align="center">
                        Last 1 Week
            </Typography>
          </div>
          <div style={{ width: 'calc(90.9% / 5)', backgroundColor: '' }}>
            <Typography variant="body1" gutterBottom align="center">
                        Last 1 Mon
            </Typography>
          </div>
          {/* <Typography variant="body1" gutterBottom style={{ marginLeft: 0.2 * containerWidth }}>
        Last 3 hrs
          </Typography> */}
        </div>
        <Slider

          style={{ width: '90.9%' }}
          classes={{
              root: classes.root,
          }}
          value={value}
          min={0}
          max={5}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

TimestampFilter.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default Dimensions()(withStyles(styles)(TimestampFilter));
