import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todo-item';
import { index } from './test';

class Todos extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      items: this.props.initialItems,
      text: '',
    };

    this.addTask = this.addTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  addTask(e) {
    e.preventDefault();
    const id = index.ID;
    index.ID += 1;
    this.setState({
      items: [{ id, text: this.state.text }].concat(this.state.items),
      text: '',
    });
  }

  deleteItem(itemId) {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId),
    });
  }

  render() {
    return (
      <div>
        <h1>待办事项</h1>
        <form onSubmit={this.addTask}>
          <input
            value={this.state.text}
            onChange={(v) => { this.setState({ text: v.target.value }); }}
          />
          <button>添加</button>
        </form>
        {this.state.items.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            deleteItem={this.deleteItem}
          />
                    ))}
      </div>
    );
  }
}

Todos.propTypes = {
  initialItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};


export default Todos;
