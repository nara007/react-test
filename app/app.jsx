import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List/List';

// function App() {
//   const items = [];
//   items.push({
//     name: 'xiaoming',
//     age: 32,
//     title: 'Mr',
//   });

//   items.push({
//     name: 'dahong',
//     age: 33,
//     title: 'Ms',
//   });

//   return (
//     <div className="container">
//       <List items={items} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [{
        id: 1,
        name: 'xiaoming',
        age: 32,
        title: 'Mr',
      }, {
        id: 2,
        name: 'dahong',
        age: 33,
        title: 'Ms',
      }],
    };
    this.loadItemFromServer = this.loadItemFromServer.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.setState(prevState => (
      { items: prevState.items.filter(item => item.id !== id) }
    ));
  }

  // componentDidMount() {

  // }

  loadItemFromServer() {
    console.log('hallo');
    axios.get('/api/user')
      .then((response) => {
        console.log(response.data);
        this.setState({ items: response.data });
      }).catch(() => {
        console.log('error');
      });
  }

  render() {
    console.log('render ........');
    console.log(this.state.items);
    return (
      <div className="container">
        <List items={this.state.items} delete={this.deleteItem} />
        <button className="test" onClick={this.loadItemFromServer}>load</button>
      </div>
    );
  }
}


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
export default App;
