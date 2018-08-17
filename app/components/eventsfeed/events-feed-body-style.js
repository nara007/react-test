const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 260,
  },

  avatar: {
    width: 65,
    height: 65,
  },

  titleContainer: {
    marginLeft: 20,
  },

  titleFont: {
    fontWeight: 600,
    color: '#4A4A4A',
  },

  subtitileFont: {
    fontWeight: 500,
    color: '#4A4A4A',
  },

  body: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 50,

    columnGap: '30px',
    rowGap: '20px',
  },
  footer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  vesselProperty: {
    color: '#A2A2A2',
    fontWeight: 'bold',
  },
  vesselValue: {
    fontWeight: 'bold',
  },
  direction: {
    color: '#768491',
    fontWeight: 'bold',
  },
});


export default styles;
