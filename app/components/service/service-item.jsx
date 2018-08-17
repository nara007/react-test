import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
// import Enum from 'es6-enum';
import CheckedCircle from '@material-ui/icons/CheckCircle';
import Glass from '@material-ui/icons/HourglassEmpty';
import Help from '@material-ui/icons/Help';
import ListItemText from '@material-ui/core/ListItemText';
// import { compose, withState, withHandlers, branch, setPropTypes, withProps } from 'recompose';
import styles from './service-item-style';

// export const SERVICESTATUS = Enum('CREATED', 'ORDERD', 'CONFIRMED', 'REJECTED');

// const exclusiveServiceProvider = ServiceComponent => (props) => {
//   const { providers, currentProviderId, name } = props;
//   let currentProvider = providers.find(provider => provider.id === currentProviderId);
//   currentProvider = currentProvider || { name: 'none' };
//   return (
//     <ServiceComponent name={name}>
//       <div>{currentProvider.name}</div>
//     </ServiceComponent>

//   );
// };


// const multipleServiceProviders = ServiceComponent => (props) => {
//   const {
//     providers, currentProviderId, name, onSelectChange,
//   } = props;
//   let currentProvider = providers.find(provider => provider.id === currentProviderId);
//   currentProvider = currentProvider || { name: 'none', id: 'none' };
//   return (
//     <ServiceComponent name={name}>
//       <Select
//         value={currentProvider.id}
//         onChange={onSelectChange}
//       >
//         {providers.map(provider =>
//           <MenuItem value={provider.id} key={provider.id}>{provider.name}</MenuItem>)}
//       </Select>
//     </ServiceComponent>

//   );
// };

class ServiceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProviderId: props.currentProviderId,
    };
    this.selectProvider = this.selectProvider.bind(this);
  }

  selectProvider(event) {
    this.setState({
      currentProviderId: event.target.value,
    });
  }


  renderProviderField() {
    let providerField = null;
    const { providers } = this.props;
    if (providers.length > 1) {
      providerField = (
        <Select
          value={this.state.currentProviderId}
          onChange={this.selectProvider}
        >
          {providers.map(provider =>
            <MenuItem value={provider.id} key={provider.id}>{provider.name}</MenuItem>)}
        </Select>);
    } else if (providers.length === 1) {
      providerField = (<div>{providers[0].name}</div>);
    }

    return providerField;
  }

  renderStatus() {
    const { status, classes } = this.props;
    let statusIcon = null;
    if (status === 'created') {
      statusIcon = (<CheckedCircle className={classes.statusCreatedStyle} />);
    } else if (status === 'ordered') {
      statusIcon = (<Glass />);
    } else if (status === 'confirmed') {
      statusIcon = (<Help className={classes.statusConfirmedStyle} />);
    }

    return statusIcon;
  }

  //   renderStatus() {
  //   const { status, classes } = this.props;
  //   let statusIcon = null;
  //   if (status === SERVICESTATUS.CREATED) {
  //     statusIcon = (<CheckedCircle className={classes.statusCreatedStyle} />);
  //   } else if (status === SERVICESTATUS.ORDERED) {
  //     statusIcon = (<Glass />);
  //   } else if (status === SERVICESTATUS.CONFIRMED) {
  //     statusIcon = (<Help className={classes.statusConfirmedStyle} />);
  //   }

  //   return statusIcon;
  // }

  render() {
    const { name, ETA, ATA } = this.props;
    return (
      <TableRow>
        <TableCell><ListItemText primary={name} /></TableCell>
        <TableCell>
          {this.renderProviderField()}
        </TableCell>
        <TableCell><ListItemText primary={ETA} /></TableCell>
        <TableCell><ListItemText primary={ATA} /></TableCell>
        <TableCell>
          {this.renderStatus()}
        </TableCell>
      </TableRow>);
  }
}


ServiceItem.propTypes = {
  name: PropTypes.string.isRequired,
  providers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentProviderId: PropTypes.string.isRequired,
  ETA: PropTypes.string.isRequired,
  ATA: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ServiceItem);
// const Service = (props) => {
//   const { name, children } = props;
//   return (
//     <TableRow>
//       <TableCell>{name}</TableCell>
//       <TableCell>
//         {children}
//       </TableCell>
//       <TableCell>12.12.2018 / 12:12:23PM</TableCell>
//       <TableCell>12.12.2018 / 12:12:23PM</TableCell>
//       <TableCell>world</TableCell>
//     </TableRow>
//   );
// };

// const withServiceProviders = branch(
//   ({ providers }) => providers.length,
//   multipleServiceProviders,
//   exclusiveServiceProvider,
// );

// const withPropTypes = setPropTypes({
//   name: PropTypes.string.isRequired,
// });
// export default compose(
//   withStyles(styles),
//   withState('providerId', 'setProviderId', 0),
//   withHandlers({
//     onSelectChange: ({ setProviderId }) => event => setProviderId(event.target.value),
//   }),
//   withPropTypes,
//   withProps(({ providerId, currentProviderId }) => ({
//     currentProviderId: providerId || currentProviderId,
//   })),
//   withServiceProviders,
// )(Service);
