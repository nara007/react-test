import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
// import styles, { selectStyles } from '../../styles/styles';
import styles from './events-feed-pagination-style';


// import { setEventsOfCurrentPage,
// setActiveEventPage, resetEvent } from '../../actions/events-feed-actions';

class EventsFeedPagination extends React.Component {
  componentDidMount() {
    // const { reset, searchEvents, state } = this.props;
    // reset();
    // searchEvents(0, state.filter);
  }

  render() {
    // const {
    //   searchEvents, setActivePage, state, theme,
    // } = this.props;
    // const compName = 'commandPanel';
    // const classes = selectStyles(theme, compName, this.props.classes);
    const { classes } = this.props;
    console.log(classes);
    return (
      <Pagination
        innerClass={classes.paginationContainerStyle}
        linkClass={classes.pageLinkStyle}
        itemClass={classes.pageItemStyle}
        activeClass={classes.pageActiveItemStyle}
        activePage={1}
        itemsCountPerPage={3}
        totalItemsCount={100}
        pageRangeDisplayed={6}
      />
    );
  }
}
EventsFeedPagination.propTypes = {
  classes: PropTypes.shape().isRequired,
};


// const connectedCommandPanel = connect(
//   state => ({ state: state.eventsFeedReducer }),
//   dispatch => ({
//     reset: () => dispatch(resetEvent()),
//     setActivePage: pageIndex => dispatch(setActiveEventPage(pageIndex)),
//     searchEvents: (pageIndex, filter) => dispatch(setEventsOfCurrentPage(pageIndex, filter)),
//   }),
// )(CommandPanel);

export default withStyles(styles)(EventsFeedPagination);
