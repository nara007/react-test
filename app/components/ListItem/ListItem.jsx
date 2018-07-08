import React from 'react';
import PropTypes from 'prop-types';
import './listitem.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
//   item: PropTypes.object.isRequired,

};
// function ListItem(props) {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <span>{props.age}</span>
//       <span>{props.title}</span>
//     </li>
//   );
// }

const ListItem = props => (
  <li>
    <span>{props.name}</span>
    <span>{props.age}</span>
    <span>{props.title}</span>
    <button onClick={() => { props.onClick(props.id); }}>load</button>
  </li>
);

ListItem.propTypes = propTypes;

export default ListItem;

