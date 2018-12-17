import React from 'react';
import ReactDOM from 'react-dom';
// import EFM from './components/eventsfeed/events-feed-message';
// import EventsFeedBody from './components/eventsfeed/events-feed-body';
// import EventsFeedItem from './components/eventsfeed/events-feed-item';
// import EventsFeedList from './components/eventsfeed/events-feed-list';
// import EventsFeedPagination from './components/eventsfeed/events-feed-pagination';
// import Filter from './components/eventsfeed/events-feed-filter-panel';
// import EventsFeedNav from './components/eventsfeed/events-feed-nav';
// import Panel from './components/mycomponent/panel';
// import Map from './components/map/map2';
// import Table from '@material-ui/core/Table';
// import { SERVICESTATUS } from './components/service/service-item';
// import Service from './components/service/service';
// import { FadeLoader } from 'react-spinners';
// import Picker from './components/picker/picker';
// import axios from 'axios';
// import List from './components/List/List';
// import EventsFeedPanel from './components/eventsfeed/events-feed-panel';
// import PopupHeader from './components/popup/popup-header';
// import PopupBody from './components/popup/popup-body';
// import PopupFooter from './components/popup/popup-footer';
// import Popup from './components/popup/popup';
// import StatePanel from './components/histry-replay/replay-state-panel';
// import Command from './components/histry-replay/replay-command';
// import ParamPanel from './components/histry-replay/replay-param-panel';
// import CustomDatePicker from './components/histry-replay/replay-custom-datepicker';
// import CustomTimePicker from './components/histry-replay/replay-custom-timepicker';
// import ParamPanel from './components/histry-replay/replay-control-panel';
// import Duration from './components/histry-replay/replay-duration';
// import ReplayPanel from './components/histry-replay/replay-panel';
// import Hello from './components/test/test';

// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
// import Delay from './components/svgicon/delay';
import './app.css';
// // import MyGrid from './components/grid/test';
// import BasePanel from './components/composition/base';
// import SubPanel from './components/composition/subpanel';
// import SubPanel2 from './components/composition/subpanel2';

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


// const theme = createMuiTheme({
//   palette: {
//     primary: { main: purple[500] }, // Purple and green play nicely together.
//     secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
//   },
// });

// const theme = createMuiTheme({
//   typography: {
//     // In Japanese the characters are usually larger.
//     fontSize: 16 * 10,
//     fontFamily: [
//       // '-apple-system',
//       // 'BlinkMacSystemFont',
//       // '"Segoe UI"',
//       '"Open Sans"',
//       'Roboto',
//     ].join(','),
//   },
// });

// import Map from './components/map/map2';
// import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
// import DeckGL, { GeoJsonLayer } from 'deck.gl';
// import VesselUtil from '../vessel/vessel-utils';
// import styles, { getRawStyle, getMapStyle } from '../../styles/styles';
// import Dimensions from 'react-dimensions';

// const aroundWithSpace = (leftSpaceNum, rightSpaceNum, text) => {
//   const space = '\u00a0';
//   return `${space.repeat(leftSpaceNum)}${text}${space.repeat(rightSpaceNum)}`;
// };

// import MyScroll from './components/scroll/scroll';
// import TodoList from './components/perf/test';
// import AnalysisChart from './components/chart/mychart';
// import AnalysisChart from './components/chart/myecharts';
import CustomSelect from './components/custom-select/custom-select';

// const defaultValue = [{ name: 'xiaoming', id: 1 }, { name: 'xiaoqiang', id: 2 }];
function App() {
  // console.log(moment(date).add(5, 'm').format('YYYY-MM-DD HH:mm'));
  // console.log(moment(date).format('YYYY-MM-DD HH:mm'));


  return (
    // <Map />
    <div style={{ width: '10vw' }}>
      <CustomSelect
        // inputLabel="Service LAbel"
        // hasPlaceholder
        onChange={(a) => { }}
        // multiple
        // defaultValue={[{ name: 'xiaoming', id: 1 }, { name: 'xiaoqiang', id: 2 }].map(item => JSON.stringify(item))}
        // defaultValue={['hello', 'world']}
        // defaultValue={JSON.stringify({ name: 'xiaoming', id: 1 })}
        // defaultValue="xiaoming"
        defaultValue="name1"
        // disabled
        // inputLabel=""
        // values={[1, 2, 3, 4, 5, 1]}
        // values={['hello', 'world', 'nihao', 'hello']}
        // values={[{ name: 'xiaoming', id: 1 }, { name: 'xiaoqiang', id: 2 }, { name: 'peter', id: 3 }]}
        values={[{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }]}
      />
    </div>

  );
}


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
export default App;
