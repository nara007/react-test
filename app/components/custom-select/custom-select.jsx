import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const isJSONString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const isStringOrNumber = (param) => {
  if (typeof (param) === 'number' || typeof (param) === 'string' ||
    param instanceof Number || param instanceof String) {
    return true;
  }

  return false;
};

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 3px 6px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 3,
  },
  root: {
    width: '100%',
  },
  inputLabel: {
    fontSize: '0.8rem',
  },
  shrinkTitle: {
    color: '#000',
    fontWeight: 900,
  },
  inputField: {
    fontSize: '0.7rem',
    color: '#00c6e7',
    fontWeight: 900,
  },
  font: {
    fontSize: '0.5rem',
  },
  placeHolder: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: '1vh',
    marginBottom: 0,
    visibility: 'hidden',
  },

  disabled: {
    color: 'darkgray',
    backgroundColor: '#dedede !important',
  },

});

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    const { multiple } = props;
    this.state = {
      value: multiple ? [] : '',
    };

    this.changeValue = this.changeValue.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.getContainerStyle = this.getContainerStyle.bind(this);
  }

  componentDidMount() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      this.changeValue(null, null, defaultValue);
    }
  }
  getContainerStyle() {
    const { multiple, classes } = this.props;
    if (multiple) {
      if (this.state.value.length) {
        return classes.container;
      }
      return `${classes.container} ${classes.disabled}`;
    }
    if (this.state.value === '') {
      return `${classes.container} ${classes.disabled}`;
    }
    return classes.container;
  }

  changeValue(event, child, defaultValue = null) {
    const { onChange } = this.props;
    if (!defaultValue) {
      this.setState({
        value: event.target.value,
      }, () => {
        onChange(this.state.value);
      });
    } else {
      this.setState({
        value: defaultValue,
      }, () => {
        onChange(this.state.value);
      });
    }
  }

  renderMenuItems(values, classes, multiple) {
    if (!Array.isArray(values)) {
      return null;
    }

    if (isStringOrNumber(values[0])) {
      // remove duplicates
      const uniqueValues = Array.from(new Set(values));
      const activeItem = multiple ? this.state.value : [this.state.value];
      return uniqueValues.map((value, index) => (
        <MenuItem key={index} value={value}>
          <Checkbox checked={activeItem.indexOf(value) > -1} />
          <Typography
            variant="subheading"
            classes={{ subheading: classes.font }}
          >
            {value}
          </Typography>
        </MenuItem>
      ));
    }

    if (typeof (values[0]) === 'object') {
      const activeItem = multiple ? this.state.value : [this.state.value];
      return values.map(value => (
        <MenuItem key={value.id} value={JSON.stringify(value)}>
          <Checkbox checked={activeItem.indexOf(JSON.stringify(value)) > -1} />
          <Typography
            variant="subheading"
            classes={{ subheading: classes.font }}
          >
            {value.name}
          </Typography>
        </MenuItem>
      ));
    }

    return null;
  }


  render() {
    const {
      inputLabel, classes, values, hasPlaceholder, multiple, disabled,
    } = this.props;
    return (
      <div className={this.getContainerStyle()}>
        <FormControl
          className={classes.root}
          disabled={disabled}
        >
          <InputLabel
            shrink
            focused={false}
            className={classes.inputLabel}
            classes={{ shrink: classes.shrinkTitle }}
          >
            {inputLabel.toUpperCase()}
          </InputLabel>
          <Select
            native={false}
            multiple={multiple}
            onChange={this.changeValue}
            value={this.state.value}
            MenuProps={MenuProps}
            input={<Input className={classes.inputField} />}
            renderValue={(selected) => {
              if (multiple) {
                return `(${selected.length}) Items`;
              }
                return isJSONString(selected) ? JSON.parse(selected).name : selected;
            }}
          >
            {this.renderMenuItems(values, classes, multiple)}
          </Select>
        </FormControl>
        {hasPlaceholder ? (
          <FormControl
            className={classes.placeHolder}
            disabled
          >
            <InputLabel className={classes.inputLabel}>PLACEHOLDER</InputLabel>
            <Select
              value=""
              input={<Input className={classes.inputField} />}
              MenuProps={MenuProps}
            />
          </FormControl>
        ) : null}
      </div>
    );
  }
}

CustomSelect.propTypes = {
  inputLabel: PropTypes.string,
  values: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  hasPlaceholder: PropTypes.bool,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  classes: PropTypes.shape({}).isRequired,
};

CustomSelect.defaultProps = {
  inputLabel: '',
  hasPlaceholder: false,
  onChange: () => {},
  multiple: false,
  disabled: false,
  defaultValue: '',
};

export default withStyles(styles)(CustomSelect);
