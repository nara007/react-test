import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './events-feed-nav-style';
import Filter from './events-feed-filter-panel';

const EventsFeedNav = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container} >
      <Typography variant="display1" gutterBottom>
        EVENT FEED
      </Typography>
      <Filter />
    </div>
  );
};

EventsFeedNav.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(EventsFeedNav);
