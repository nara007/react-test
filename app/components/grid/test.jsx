import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './test-style';

const MyGrid = (props) => {
  const { classes } = props;
  console.log(classes);
  return (
    <Grid container spacing={8}>
      <Grid item xs={3} >
        <div className={classes.gridCell}>A</div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.gridCell}>B</div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.gridCell}>C</div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.gridCell}>D</div>
      </Grid>
    </Grid>
  );
};

MyGrid.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MyGrid);
