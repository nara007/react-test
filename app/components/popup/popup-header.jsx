import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Cancel from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import styles from './popup-header-style';

const PopupHeader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography
        className={classes.textContainer}
        variant="subheading"
        classes={{ subheading: classes.vesselProperty }}
      >
          Last Updated:
      </Typography>
      <Typography
        variant="subheading"
        classes={{ subheading: classes.vesselValue }}
      >
      2018/05/23 12:23 PM
      </Typography>
      <IconButton className={classes.cancelButton}>
        <Cancel />
      </IconButton>
    </div>
  );
};


PopupHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
};


export default withStyles(styles)(PopupHeader);

