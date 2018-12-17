import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const radiusSet = {

  none: {},
  left: { borderTopLeftRadius: 36, borderBottomLeftRadius: 36 },
  right: { borderTopRightRadius: 36, borderBottomRightRadius: 36 },
};

class CustomButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.changeState = this.changeState.bind(this);
    this.getButtonStyle = this.getButtonStyle.bind(this);
  }


  getButtonStyle() {
    const { radius } = this.props;
    const radiusStyle = radiusSet[radius.toLowerCase()];
    const backgroundStyle = { backgroundColor: 'transparent' };
    if (this.state.active) {
      backgroundStyle.backgroundColor = 'lightgray';
    }

    return { ...radiusStyle, ...backgroundStyle, textTransform: 'uppercase' };
  }

  changeState() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Button
        variant="outlined"
        style={this.getButtonStyle()}
        onClick={this.changeState}
      >
        {children}
      </Button>
    );
  }
}

CustomButton.propTypes = {
  radius: PropTypes.string,
  children: PropTypes.string.isRequired,

};

CustomButton.defaultProps = {
  radius: 'none',
};

export default CustomButton;
