import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './events-feed-item-style';
import EventsFeedMessage from './events-feed-message';
import EventsFeedBody from './events-feed-body';

const EventsFeedItem = (props) => {
  const { classes } = props;
  console.log(classes);

  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <EventsFeedMessage message="hello this is a new message" />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <EventsFeedBody />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

EventsFeedItem.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(EventsFeedItem);

