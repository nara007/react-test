const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingTop: 20,
    // paddingBottom: 20,
    // backgroundColor: 'lightgray',
    width: '100%',
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
    flexGrow: 1,
    columnGap: '0',
    rowGap: '20px',
    minWidth: 650,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: 100,
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
