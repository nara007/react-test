export default {
  eventPanel: {
    eventPanelContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      backgroundColor: 'lightgray',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      width: '100%',
      boxSizing: 'border-box',
      '&:hover': {
        cursor: 'pointer',
      },
      borderBottom: '0.5px solid #E5EBF0',
      minWidth: 500,
    },
    avatarContainerStyle: {
      marginRight: 10,
    },
    contentContainerStyle: {
      flexGrow: 1,
    },

    headerContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    bodyContainerStyle: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: 30,
      marginTop: 5,
      marginBottom: 5,
    },
    directionStyle: {
      flexGrow: 0,
    },

    footerContainerStyle: {
      display: 'flex',
      alignItems: 'center',
    },

    subtitleStyle: {
      flexGrow: 0,
    },
  },

  commandPanel: {
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
      justifyContent: 'space-around',
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
  },

  eventsFeedPane: {
    containerStyle: {
      width: 950,
      backgroundColor: '#F1F1F1',
      padding: 10,
    },
  },

  filterPanel: {
    containerStyle: {
      display: 'flex',
      alignItems: 'flex-start',
      minWidth: 920,
      minHeight: 53,
    },

    filterContainerStyle: {
      marginLeft: 10,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
    },

    filterSelectorStyle: {
      minWidth: 140,
    },
  },

  replayPanel: {
    panelStyle: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 10,
    },
    timeFrameBarStyle: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 0,
    },
    timeFrameBarTitleContainerStyle: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    dateBarContainerStyle: {
      width: 165,
    },
    dateBarStyle: {
      width: '100%',
    },
    progressbarContainerStyle: {
      flexGrow: 1,
    },
    iconButtonStyle: {
      width: 38,
      height: 38,
    },
    playButtonContainerStyle: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    playButtonStyle: {
      color: 'blue',
      backgroundColor: 'DeepSkyBlue',
    },
    modebarStyle: {
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderBottomColor: 'lightgray',
    },
    modebarTitleStyle: {
      paddingLeft: 0,
      paddingRight: 0,
      border: 'none',
    },
    modebarContentContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 0,
      border: 'none',
    },
    modebarSwitchTitleStyle: {
      paddingRight: 0,
    },
    modebarSelectContainerStyle: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    modebarSelectStyle: {
      width: 190,
      minWidth: 150,
    },
    modebarTextFieldStyle: {
      width: 150,
    },
  },

  spinner: {
    spinnerStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(83, 105, 128, 0.7)',
      position: 'relative',
    },
  },

  schedulePanel: {
    basicPanelStyle: {
      overflowY: 'hidden',
      backgroundColor: 'white',
    },
    appbarStyle: {
      height: 30,
      paddingRight: 10,
      backgroundColor: 'WhiteSmoke',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    closeButtonStyle: {
      width: 24,
      height: 24,
    },
    scheduleInfoStyle: {
      height: 20,
      backgroundColor: 'red',
    },
    scheduleContentStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
  stepPanel: {
    containerStyle: {
      backgroundColor: 'white',
    },
    iconContainerStyle: {
      paddingLeft: 35,
    },
    checkedIconStyle: {
      color: 'green',
    },
    cancelIconstyle: {
      color: 'gray',
    },

    cellStyle: {
      paddingRight: 0,
    },

    noShadow: {
      boxShadow: 'none',
    },
    statusIconStyle: {
      display: 'block',
      width: 90,
    },
  },
  singleStep: {
    cellStyle: {
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    expansionPanelStyle: {
      boxShadow: 'none',
    },
    expansionPanelSummaryStyle: {
      paddingLeft: 0,
    },
    cancelIconstyle: {
      color: 'gray',
    },
    itemStyle: {
      paddingRight: 0,
    },
  },
  scheduleListItem: {
    headerStyle: {
      fontWeight: 'bold',
      fontSize: '1rem',
    },
    iconStyle: {
      width: 30,
      height: 30,
    },
    listStyle: {
      display: 'flex',
      flexDirection: 'row',
    },
    listItemStyle: {
    },
    textStyle: {
      paddingBottom: 0,
      paddingTop: 0,
    },
    containerStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    headerContainerStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: '100%',
      boxSizing: 'border-box',
    },
    bodyContainerStyle: {
      boxSizing: 'border-box',
      width: '100%',
      paddingRight: 0,
    },
    activeStyle: {
      color: '#00BFFF',
      width: '100%',
    },
  },
  scheduleList: {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'scroll',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    titleStyle: {
      marginLeft: 24,
      color: 'gray',
      fontSize: '2rem',
    },
    paginationContainerStyle: {
      listStyle: 'none',
      paddingLeft: 0,
      display: 'flex',
      justifyContent: 'space-around',
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
  },

  scheduleInfo: {
    containerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: 24,
      paddingRight: 24,
    },
    cardStyle: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      borderBottomStyle: 'solid',

    },
    cardHeaderStyle: {
      paddingTop: 20,
      paddingLeft: 10,
      paddingBottom: 10,
    },
    cardItemStyle: {
      padding: 0,
    },
    listStyle: {
      paddingBottom: 0,
    },
    listTextStyle: {
      paddingLeft: 0,
    },
    tableRowStyle: {
      height: 30,
    },
    tableContainerStyle: {
      paddingTop: 15,
    },
    cellStyle: {
      border: 0,
      paddingRight: 5,
      paddingLeft: 5,
      whiteSpace: 'nowrap',
    },
    cellItemStyle: {
      display: 'inline-block',
      width: 55,
    },
    cellKeyStyle: {
      display: 'inline-block',
    },

    cellValueStyle: {
      marginLeft: 10,
      fontWeight: 'bold',
    },
    imageContainerStyle: {
      paddingTop: 20,
    },
  },
  scheduleDetail: {
    appbarStyle: {
      height: 30,
      backgroundColor: 'WhiteSmoke',
    },
    containerStyle: {
      backgroundColor: 'white',
      overflow: 'auto',
    },
  },
};
