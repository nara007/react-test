import React from 'react';
import Transition from 'react-transition-group/Transition';
import Button from '@material-ui/core/Button';

const duration = 700;
const defaultStyle = {
  transition: `width ${duration}ms ease-in-out, height ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  width: 0,
  height: 0,
  backgroundColor: 'red',
  opacity: 0,
};

const transitionStyles = {
  entering: { width: 0, height: 0, opacity: 0 },
  entered: { width: 100, height: 200, opacity: 1 },
};

class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      open: false,
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.toggleState}>
        Primary
        </Button>
        <Transition in={this.state.open} timeout={duration}>
          {state => (
            <div style={{
        ...defaultStyle,
        ...transitionStyles[state],
      }}
            >
            hello
            </div>
    )}
        </Transition>
      </div>

    );
  }
}

export default Test;
