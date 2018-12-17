import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './popup-footer-style';

const PopupFooter = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.dateTimeContainer}>
        <div className={classes.arrivalTimeContainer}>
          <Typography
            className={classes.textContainer}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
            ETA
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
        2018/05/23 10:30PM
          </Typography>
        </div>
        <div className={classes.arrivalTimeContainer}>
          <Typography
            className={classes.textContainer}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
            ATA
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
        2018/05/23 10:30PM
          </Typography>
        </div>
      </div>
      <div className={classes.progressContainer}>
        <LinearProgress variant="determinate" value={15} />
      </div>
    </div>

  );
};

PopupFooter.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(PopupFooter);
