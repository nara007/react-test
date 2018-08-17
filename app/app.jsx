import React from 'react';
import ReactDOM from 'react-dom';
import EFM from './components/eventsfeed/events-feed-message';
import EventsFeedBody from './components/eventsfeed/events-feed-body';
// import Panel from './components/mycomponent/panel';
// import Map from './components/map/map';
// import Table from '@material-ui/core/Table';
// import { SERVICESTATUS } from './components/service/service-item';
// import Service from './components/service/service';
// import { FadeLoader } from 'react-spinners';
// import Picker from './components/picker/picker';
// import axios from 'axios';
// import List from './components/List/List';
import './app.css';
import { div } from 'gl-matrix/src/gl-matrix/vec2';

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

function App() {
  return (
    // <Picker />
    // <Map />
    <div>
      <EFM message="hello this is a new message" />
      <EventsFeedBody />
    </div>
  );
}


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
export default App;
