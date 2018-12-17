import React from 'react';
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './events-feed-panel-style';
// import Filter from './events-feed-filter-panel';
import EventsFeedNav from './events-feed-nav';
import EventsFeedPagination from './events-feed-pagination';

const EventsFeedPanel = (props) => {
  const { classes } = props;
  console.log(classes);
  return (
    <div>
      <EventsFeedNav />
      <EventsFeedPagination />
    </div>
  );
};

EventsFeedPanel.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(EventsFeedPanel);
