import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  summaryContent: {
    // marginTop: 0,
    // marginBottom: 0,
    // paddingTop: 12,
    // paddingBottom: 12,
    // height: '100%',
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div
      className={classes.root}

    >
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{
                content: classes.summaryContent,
            }}

        >

          <div id="xiaoming" style={{ width: '100%' }}>
            <Typography
              className={classes.heading}
              onClick={(e) => {
                e.stopPropagation();
            }}
            >Expansion Panel 1
            </Typography>
          </div>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
