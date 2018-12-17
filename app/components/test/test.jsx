import React from 'react';
import { withState } from 'recompose';
import PropTypes from 'prop-types';

const Hello = (props) => {
  console.log(props);
  console.log(props.counter);
  return (
    <div>
        hello
    </div>
  );
};

Hello.propTypes = {
  counter: PropTypes.number.isRequired,
};

const enhance = withState('counter', 'setCounter', 0);

export default enhance(Hello);
