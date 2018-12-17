import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const FilterItem = (props) => {
  const { classes, filter, deleteFilter } = props;
  return (
    <div className={classes.container}>
      <Typography variant="subheading">
        { filter.type === 'timestamp' ? `${filter.value[0]} - ${filter.value[1]}` : `${filter.type}=${filter.value}`}
      </Typography>
      <div style={{ width: 10 }} />
      <IconButton
        style={{ width: 24, height: 24 }}
        disableRipple
        aria-label="Delete"
        color="primary"
        onClick={deleteFilter(filter.id)}
      >
        <CancelIcon />
      </IconButton>
    </div>
  );
};

FilterItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  filter: PropTypes.shape().isRequired,
  deleteFilter: PropTypes.func.isRequired,
};

export default FilterItem;
