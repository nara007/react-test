import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// import axios from 'axios';
import ListItem from '../ListItem/ListItem';
import './list.css';

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handleEvent = this.handleEvent.bind(this);
//   }

//   //   componentDidMount() {
//   //     axios.get('/api/user', {
//   //     //   params: {
//   //     //     ID: 12345,
//   //     //   },
//   //     }).then((response) => {
//   //       this.setState({ items: response.data });
//   //     }).catch(() => {
//   //     });
//   //   }


//   render() {
//     const listItems = this.props.items.map(item =>
//       <ListItem key={shortid.generate()} {...item} />);
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
// }

function List(props) {
//   function handleEvent(e) {
//     console.log(e.nativeEvent);
//     console.log(e);
//   }

  function deleteItem(id) {
    props.delete(id);
  }

  const listItems = props.items.map(item =>
    <ListItem key={shortid.generate()} {...item} onClick={deleteItem} />);
  return (
    <ul>{listItems}</ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  delete: PropTypes.func.isRequired,
};

// function List() {
//   const item = {
//     name: 'xiaoming',
//     age: 32,
//     title: 'Mr',
//   };
//   return (
//     <ul>
//       <ListItem {...item} />
//     </ul>
//   );
// }

// const List = () => {
//   const item = {
//     name: 'xiaoming',
//     age: 32,
//     title: 'Mr',
//   };


//   return (
//     <ul>
//       <ListItem {...item} />
//     </ul>
//   );
// };

export default List;
