import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Anchor from 'mdi-material-ui/Anchor';
import Clock from 'mdi-material-ui/Clock';
import Calendar from 'mdi-material-ui/CalendarRange';
import styles from './events-feed-body-style';

const EventsFeedBody = (props) => {
  const { classes } = props;

  return (
    <div className={classes.container} >
      <div className={classes.header}>
        <Avatar className={classes.avatar}>
          <ImageIcon />
        </Avatar>
        <div className={classes.titleContainer}>
          <Typography variant="headline" classes={{ headline: classes.titleFont }}>
          APL Holland
          </Typography>
          <Typography variant="subheading" classes={{ subheading: classes.subtitileFont }}>
          Container Ship
          </Typography>
        </div>
      </div>
      <div className={classes.body} >
        <div style={{ display: 'flex' }}>
          <Anchor style={{ marginRight: 5 }} />
          <Typography variant="subheading">
          Berth/Et Poit
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ marginRight: 5 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          Flag:
          </Typography>
          <Typography variant="subheading">
          Singapore
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ marginRight: 5 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          Length:
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
          190.0 m
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ width: 55 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          Event:
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
          Pilot
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Clock style={{ marginRight: 5 }} />
          <Typography variant="subheading">
            22.12.2018
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ marginRight: 5 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          GRT:
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
          1472
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ width: 58 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          TEU:
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
          5510
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ marginRight: 5 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          Action:
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
          Pilot on board
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Calendar style={{ marginRight: 5 }} />
          <Typography variant="subheading">
          1:23 PM
          </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography
            style={{ marginRight: 5 }}
            variant="subheading"
            classes={{ subheading: classes.vesselProperty }}
          >
          IMO:
          </Typography>
          <Typography
            variant="subheading"
            classes={{ subheading: classes.vesselValue }}
          >
          9109366
          </Typography>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography
          variant="subheading"
          classes={{ subheading: classes.direction }}
        >
          INCOMING
        </Typography>
      </div>
      {/* <div className={classes.footer} /> */}
    </div>
  );
};

EventsFeedBody.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(EventsFeedBody);
