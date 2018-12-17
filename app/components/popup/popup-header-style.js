const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    '&::after': {
      content: '""',
      display: 'inline-block',
      width: 5,
    },
    borderBottom: '2px solid lightgray',
  },
  content: {
    fontWeight: 'bold',
  },
  cancelButton: {
    marginLeft: 'auto',
  },
  textContainer: {
    marginRight: 5,
  },
  vesselProperty: {
    color: '#A2A2A2',
    fontWeight: 'bold',
  },
  vesselValue: {
    fontWeight: 'bold',
  },
});
export default styles;
