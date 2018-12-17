import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DurationIcon from '@material-ui/icons/Update';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import styles from './replay-duration-style';

const Duration = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <DurationIcon style={{ color: 'gray', display: 'block' }} />
      <div style={{ width: 15 }} />
      <TextField
        id="durationInput"
        type="number"
        // disabled={isPlaying || progressPosition === PROGRESSPOSITION.CENTER}
        placeholder="15"
        // value={this.state.duration}
        // onChange={this.changeDuration}
        InputProps={{
                        startAdornment: <InputAdornment position="start">Min</InputAdornment>,
                      }}
        inputProps={{ min: '15', max: '120' }}
      />
    </div>
  );
};

Duration.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Duration);
