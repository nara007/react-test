import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styles from './popup-body-style';

const PopupBody = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src="https://www.deltamarin.com/wp-content/uploads/2017/01/Maersk-container-vessel_Deltamarin-reference.jpg"
        //   onError={(e) => { e.target.src = backupImg; }}
          alt="vessel"
        />
      </div>
      <div className={classes.vesselInfoContainer}>
        <div className={classes.titleContainer} >
          <Typography variant="headline">
        APL Holland
          </Typography>
          <Typography variant="subheading">
        Container Ship
          </Typography>
        </div>


        <div className={classes.vesselDetailContainer}>
          <div className={classes.vesselInfo}>
            <Typography
              className={classes.textContainer}
              variant="subheading"
              classes={{ subheading: classes.vesselProperty }}
            >
          IMO:
            </Typography>
            <Typography
              variant="subheading"
              classes={{ subheading: classes.vesselValue }}
            >
              1234567
            </Typography>
          </div>
          <div className={classes.vesselInfo}>
            <Typography
              className={classes.textContainer}
              variant="subheading"
              classes={{ subheading: classes.vesselProperty }}
            >
          Status:
            </Typography>
            <Typography
              variant="subheading"
              classes={{ subheading: classes.vesselValue }}
            >
              Underway using Motro Engine
            </Typography>
          </div>
          <div className={classes.vesselInfo}>
            <Typography
              className={classes.textContainer}
              variant="subheading"
              classes={{ subheading: classes.vesselProperty }}
            >
          MMSI:
            </Typography>
            <Typography
              variant="subheading"
              classes={{ subheading: classes.vesselValue }}
            >
              928328
            </Typography>
          </div>
          {/* <div>Speed/Course: 89kn /260</div> */}
          <div className={classes.vesselInfo}>
            <Typography
              className={classes.textContainer}
              variant="subheading"
              classes={{ subheading: classes.vesselProperty }}
            >
          Speed/Course:
            </Typography>
            <Typography
              variant="subheading"
              classes={{ subheading: classes.vesselValue }}
            >
              89kn /260
            </Typography>
          </div>
          <div className={classes.vesselInfo}>
            <Typography
              className={classes.textContainer}
              variant="subheading"
              classes={{ subheading: classes.vesselProperty }}
            >
            Flag:
            </Typography>
            <Typography
              variant="subheading"
              classes={{ subheading: classes.vesselValue }}
            >
            Singapore
            </Typography>
          </div>
          {/* <div>Draught: 8.2m</div> */}
          <div className={classes.vesselInfo}>
            <Typography
              className={classes.textContainer}
              variant="subheading"
              classes={{ subheading: classes.vesselProperty }}
            >
            Draught:
            </Typography>
            <Typography
              variant="subheading"
              classes={{ subheading: classes.vesselValue }}
            >
            8.2m
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupBody.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(PopupBody);
