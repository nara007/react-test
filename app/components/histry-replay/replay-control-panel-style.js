const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  datetimeContainer: {
    display: 'flex',
    '&::after': {
      content: '""',
      display: 'block',
      width: 20,
    },
  },

  timeContainer: {
    display: 'flex',
    '&::after': {
      content: '""',
      display: 'block',
      width: 44,
    },
  },
  durationContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  editContainer: {
    display: 'flex',
    borderLeft: '2px solid lightgray',
    paddingLeft: 10,
    marginLeft: 20,
  },
});
export default styles;
