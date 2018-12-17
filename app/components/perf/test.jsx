import React from 'react';
// import PropTypes from 'prop-types';
import Todos from './todos';

export const index = { ID: 0 };
const items = [];
for (let i = 0; i < 1000; i += 1) {
  items.push({ id: index.ID, text: `事项${i}` });
  index.ID += 1;
}

// class TodoList extends Component {
//   render() {
//     return (
//
//     );
//   }
// }

const TodoList = () => <Todos initialItems={items} />;


export default TodoList;
