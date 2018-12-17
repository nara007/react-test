import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';


const BasePanel = props => (
  <div>
    <div style={{
 backgroundColor: 'lightgray', borderRadius: 5, display: 'flex', justifyContent: 'flex-end',
}}
    >
      <IconButton aria-label="Delete">
        <Close />
      </IconButton>
    </div>
    {props.children}
  </div>
);

BasePanel.propTypes = {
  children: PropTypes.node.isRequired,
};
export default BasePanel;
