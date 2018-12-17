import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem() {
    const { id } = this.props.item;
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div>
        <button style={{ width: 30 }} onClick={this.deleteItem}>X</button>
                &nbsp;
        <span>{this.props.item.text}</span>
      </div>
    );
  }
}

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default TodoItem;
