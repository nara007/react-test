const styles = () => ({
  container: {
    backgroundColor: '#F2F2F2',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  dateTimeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  arrivalTimeContainer: {
    display: 'flex',
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
  progressContainer: {
    '&::before': {
      content: '""',
      display: 'block',
      height: 10,
    },
  },
});
export default styles;
