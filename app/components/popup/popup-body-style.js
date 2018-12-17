const styles = () => ({
  container: {
    display: 'flex',
    // alignItems: 'flex-start',
    // alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20,
    // height: 190,
  },
  imgContainer: {
    height: 152,
    width: 200,
    // padding: 5,
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  vesselInfoContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },
  vesselDetailContainer: {
    display: 'grid',
    // gridTemplateColumn: 'repeat(2, 1fr)',
    gridTemplateColumns: '150px 1fr',
    // height: '100%',
    // backgroundColor: 'orange',
    flexGrow: 1,

  },

  titleContainer: {
    // backgroundColor: 'yellow',
    '&::after': {
      content: '""',
      display: 'block',
      height: 15,
    },
  },

  vesselInfo: {
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
});
export default styles;
