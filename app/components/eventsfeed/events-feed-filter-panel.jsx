import React from 'react';
import Button from '@material-ui/core/Button';
import FilterIcon from 'mdi-material-ui/FilterOutline';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import { DateTimePicker } from 'material-ui-pickers';
import DateRange from '@material-ui/icons/DateRange';
import TimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import LeftArrowIcon from '@material-ui/icons/ChevronLeft';
import RightArrowIcon from '@material-ui/icons/ChevronRight';
import CancelIcon from '@material-ui/icons/Close';
import moment from 'moment';
// import { connect } from 'react-redux';
import Enum from 'es6-enum';
// import FilterItem from './events-feed-item';
import FilterItem from './events-feed-filter-item';
// import styles, { selectStyles } from '../../styles/styles';
import styles from './events-feed-filter-panel-style';
// import { setFilter, setEventsOfCurrentPage,
// setActiveEventPage, resetEvent } from '../../actions/events-feed-actions';

const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
const FILTERMODE = Enum('ADDFILTER', 'FILTERLIST');

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: 'mmsi',
      mmsi: 0,
      eventName: '',
      startDateTime: moment(new Date()).format(dateTimeFormat),
      endDateTime: moment(new Date()).format(dateTimeFormat),
      filterMode: FILTERMODE.ADDFILTER,
      filters: [],
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.switchInputField = this.switchInputField.bind(this);
    this.changeFilterMMSI = this.changeFilterMMSI.bind(this);
    this.changeFilterEventName = this.changeFilterEventName.bind(this);
    this.changeStartDateTime = this.changeStartDateTime.bind(this);
    this.changeEndDateTime = this.changeEndDateTime.bind(this);
    this.switchFilterMode = this.switchFilterMode.bind(this);
    this.switchFilterField = this.switchFilterField.bind(this);
    this.createFilter = this.createFilter.bind(this);
    this.generateFilter = this.generateFilter.bind(this);
    this.deleteFilter = this.deleteFilter.bind(this);
    this.convertFiltersToString = this.convertFiltersToString.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  componentDidMount() {
    // const { setEventsFeedFilter } = this.props;
    // setEventsFeedFilter('');
  }

  changeFilter(event) {
    this.setState({
      filterType: event.target.value,
    });
  }

  changeFilterMMSI(event) {
    this.setState({
      mmsi: event.target.value,
    });
  }

  changeFilterEventName(event) {
    this.setState({
      eventName: event.target.value,
    });
  }

  createFilter() {
    let newFilter;
    if (this.state.filterType === 'mmsi') {
      if (this.state.mmsi) {
        newFilter = this.generateFilter(this.state.mmsi);
      }
    } else if (this.state.filterType === 'event') {
      if (this.state.eventName) {
        newFilter = this.generateFilter(this.state.eventName);
      }
    } else {
      const startDateTime = moment(this.state.startDateTime);
      const endDateTime = moment(this.state.endDateTime);
      if (startDateTime.isBefore(endDateTime)) {
        newFilter = this.generateFilter([this.state.startDateTime, this.state.endDateTime]);
      }
    }

    if (newFilter) {
      const prevFilter = this.state.filters.find((filter) => {
        if (newFilter.type === 'mmsi' || newFilter.type === 'event') {
          return (filter.type === newFilter.type
                        && filter.value === newFilter.value);
        }
        return (filter.type === newFilter.type);
      });
      if (!prevFilter) {
        this.setState({
          filters: [...this.state.filters, newFilter],
        }, this.updateFilter);
      } else {
        this.switchFilterMode(FILTERMODE.FILTERLIST)();
      }
    }
  }

  updateFilter() {
    // const { setEventsFeedFilter } = this.props;
    // const filterParameter = this.convertFiltersToString();
    // setEventsFeedFilter(filterParameter);
    // this.applyFilter(filterParameter);
    this.switchFilterMode(FILTERMODE.FILTERLIST)();
    console.log(this.state);
  }

  applyFilter(filters) {
    // const { searchEvents, reset } = this.props;
    // reset();
    // searchEvents(0, filters);
    console.log(filters, this.state);
  }

  convertFiltersToString() {
    const mmsiSet = [];
    const eventNameSet = [];
    const timestamps = [];
    this.state.filters.forEach((filter) => {
      if (filter.type === 'mmsi') {
        mmsiSet.push(filter.value);
      } else if (filter.type === 'event') {
        eventNameSet.push(filter.value);
      } else {
        timestamps.push(filter.value[0]);
        timestamps.push(filter.value[1]);
      }
    });

    const mmsiQuery = mmsiSet.length ? `mmsi=${mmsiSet.join()}` : '';
    const eventNameQuery = eventNameSet.length ? `event_name=${eventNameSet.join()}` : '';
    const timestampQuery = timestamps.length ? `timestamp=${timestamps.join()}` : '';
    return [mmsiQuery, eventNameQuery, timestampQuery].filter(query => query).join('&');
  }

  generateFilter(value) {
    let filterValue = value;
    if (typeof (filterValue) === 'string') {
      filterValue = value.trim();
    }
    return {
      type: this.state.filterType,
      value: filterValue,
      id: new Date().getTime(),
    };
  }

  switchFilterMode(mode) {
    return () => {
      this.setState({
        filterMode: mode,
      });
    };
  }

  switchInputField() {
    let inputField;
    if (this.state.filterType === 'mmsi') {
      inputField = (
        <TextField
          style={{ width: 120 }}
          value={this.state.mmsi || ''}
          onChange={this.changeFilterMMSI}
          type="number"
        />);
    } else if (this.state.filterType === 'event') {
      inputField = (
        <TextField
          style={{ width: 120 }}
          value={this.state.eventName}
          onChange={this.changeFilterEventName}
        />);
    } else if (this.state.filterType === 'timestamp') {
      inputField = (
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              style={{ width: 210 }}
              showTodayButton
              keyboardIcon={<DateRange style={{ width: 24, height: 24 }} />}
              dateRangeIcon={<DateRange />}
              timeIcon={<TimeIcon />}
              leftArrowIcon={<LeftArrowIcon />}
              rightArrowIcon={<RightArrowIcon />}
              keyboard
              disableFuture
              onError={console.log}
              onChange={this.changeStartDateTime}
              value={new Date(this.state.startDateTime)}
              format="YYYY/MM/DD hh:mm A"
              disableOpenOnEnter
              mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <DateTimePicker
              style={{ width: 210, marginLeft: 10 }}
              showTodayButton
              keyboardIcon={<DateRange style={{ width: 24, height: 24 }} />}
              dateRangeIcon={<DateRange />}
              timeIcon={<TimeIcon />}
              leftArrowIcon={<LeftArrowIcon />}
              rightArrowIcon={<RightArrowIcon />}
              keyboard
              disableFuture
              onError={console.log}
              onChange={this.changeEndDateTime}
              value={new Date(this.state.endDateTime)}
              format="YYYY/MM/DD hh:mm A"
              disableOpenOnEnter
              mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            />
          </MuiPickersUtilsProvider>
        </div>
      );
    }
    return inputField;
  }

  switchFilterField() {
    // const { theme } = this.props;
    // const compName = 'filterPanel';
    // const classes = selectStyles(theme, compName, this.props.classes);
    const { classes } = this.props;
    let filterField;
    if (this.state.filterMode === FILTERMODE.ADDFILTER) {
      filterField = (
        <div className={classes.filterContainerStyle}>
          <Select
            className={classes.filterSelectorStyle}
            value={this.state.filterType}
            onChange={this.changeFilter}
          >
            <MenuItem value="mmsi">Vessel (MMSI)</MenuItem>
            <MenuItem value="event">Event Name</MenuItem>
            <MenuItem value="timestamp">Timestamp</MenuItem>
          </Select>
          <div style={{ marginLeft: 10, marginRight: 10 }}>
            {this.switchInputField()}
          </div>
          <Button
            variant="contained"
            classes={{ root: classes.buttonSize }}
            onClick={this.createFilter}
          >
            <DoneIcon />
          </Button>
          <Button
            variant="contained"
            classes={{ root: classes.buttonSize }}
            onClick={this.switchFilterMode(FILTERMODE.FILTERLIST)}
          >
            <CancelIcon />
          </Button>
        </div>
      );
    } else {
      filterField = (
        <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginLeft: 10,
          }}
        >
          {this.state.filters.map(filter => (
            <FilterItem key={filter.id} filter={filter} deleteFilter={this.deleteFilter} />
          ))}
        </div>
      );
    }

    return filterField;
  }

  deleteFilter(id) {
    return () => {
      this.setState({
        filters: this.state.filters.filter(filter => (filter.id !== id)),
      }, this.updateFilter);
    };
  }

  changeStartDateTime(date) {
    const currentDateTime = moment(date).format(dateTimeFormat);
    if (this.state.startDateTime !== currentDateTime) {
      this.setState({ startDateTime: currentDateTime });
    }
  }

  changeEndDateTime(date) {
    const currentDateTime = moment(date).format(dateTimeFormat);
    if (this.state.endDateTime !== currentDateTime) {
      this.setState({ endDateTime: currentDateTime });
    }
  }

  render() {
    // const { theme } = this.props;
    // const compName = 'filterPanel';
    // const classes = selectStyles(theme, compName, this.props.classes);
    const { classes } = this.props;
    return (
      <div className={classes.containerStyle}>
        <Button
          variant="contained"
        //   style={{ minWidth: 137, backgroundColor: '#00B2A8' }}
        //   style={{ backgroundColor: '#00B2A8' }}
          classes={{ root: classes.buttonSize }}
          onClick={this.switchFilterMode(FILTERMODE.ADDFILTER)}
        >
          <FilterIcon />
        </Button>
        {this.switchFilterField()}
      </div>);
  }
}

Filter.propTypes = {
  classes: PropTypes.shape().isRequired,
//   theme: PropTypes.string.isRequired,
};

Filter.defaultProps = {
//   theme: 'light',
};
// const connectedFilter = connect(
//   () => ({}),
//   dispatch => ({
//     setEventsFeedFilter: filter => dispatch(setFilter(filter)),
//     reset: () => dispatch(resetEvent()),
//     setActivePage: pageIndex => dispatch(setActiveEventPage(pageIndex)),
//     searchEvents: (pageIndex, filter) => dispatch(setEventsOfCurrentPage(pageIndex, filter)),
//   }),
// )(Filter);

// export default withStyles(styles)(connectedFilter);
export default withStyles(styles)(Filter);
