import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './events-feed-list-style';
import EventsFeedItem from './events-feed-item';

const EventsFeedList = (props) => {
  const { classes, eventsFeedList } = props;

  console.log(classes);
  return (
    <div>
      {eventsFeedList.map(() => (
        <EventsFeedItem />
      ))}
    </div>
  );
};

EventsFeedList.propTypes = {
  classes: PropTypes.shape().isRequired,
  eventsFeedList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(EventsFeedList);
