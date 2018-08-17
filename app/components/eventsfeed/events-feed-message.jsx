import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './events-feed-message-style';


const EventsFeedMessage = (props) => {
  const { message, classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="title" className={classes.messageType}>
        UPDATE:
      </Typography>
      <Typography variant="title">
        {message}
      </Typography>
    </div>

  );
};

EventsFeedMessage.propTypes = {
  message: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

EventsFeedMessage.defaultProps = {
  message: '',
};

export default withStyles(styles)(EventsFeedMessage);
