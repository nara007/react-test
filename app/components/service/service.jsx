import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ServiceItem from './service-item';

const Service = (props) => {
  const { serviceItems } = props;

  console.log('hello', serviceItems);
  return (
    <Table >
      <TableHead>
        <TableRow>
          <TableCell> <ListItemText secondary="SERVICE TYPE" /></TableCell>
          <TableCell> <ListItemText secondary="PROVIDER" /></TableCell>
          <TableCell> <ListItemText secondary="ETA" /></TableCell>
          <TableCell> <ListItemText secondary="ATA" /></TableCell>
          <TableCell> <ListItemText secondary="STATUS" /></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {serviceItems.map(serviceItem => (
          <ServiceItem key={serviceItem.id} {...serviceItem} />
          ))}
      </TableBody>
    </Table>
  );
};

Service.propTypes = {
  serviceItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Service;
