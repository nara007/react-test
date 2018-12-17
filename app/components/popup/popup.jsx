import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PopupHeader from './popup-header';
import PopupBody from './popup-body';
import PopupFooter from './popup-footer';
import styles from './popup-style';

const Popup = (props) => {
  const { classes } = props;
  console.log(classes);
  return (
    <div>
      <PopupHeader />
      <PopupBody />
      <PopupFooter />
    </div>
  );
};

Popup.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Popup);
