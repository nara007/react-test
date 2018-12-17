const styles = () => ({

  containerStyle: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    '&::after': {
      content: '""',
    },
  },

  paginationContainerStyle: {
    listStyle: 'none',
    paddingLeft: 0,
    display: 'flex',
    // justifyContent: 'space-around',
    justifyContent: 'center',
  },
  pageLinkStyle: {
    textDecoration: 'none',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 5,
  },
  pageItemStyle: {
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  pageActiveItemStyle: {
    backgroundColor: '#16b0fe',
  },

});


export default styles;
