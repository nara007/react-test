import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import styles from './replay-duration-style';

const Edit = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container} >
      <IconButton
        aria-label="edit mode"
      >
        <EditIcon />
      </IconButton>
    </div>
  );
};

Edit.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Edit);
