import React from 'react';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './event-filter-panel-style';


class EventFilterPanel extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <Icon color="disabled" className={classes.plusIcon}>
        add_circle
        </Icon>
      </Paper>
    );
  }
}

EventFilterPanel.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(EventFilterPanel);
