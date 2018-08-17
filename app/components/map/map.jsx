
import React, { Component } from 'react';
import ReactMapGL, { HTMLOverlay } from 'react-map-gl';

class Map extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   viewport: {
    //     width: 400,
    //     height: 400,
    //     latitude: 37.7577,
    //     longitude: -122.4376,
    //     zoom: 8,
    //   },
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.78,
        longitude: -122.41,
        zoom: 8,
      },
    };
  }


  render() {
    const overlay = (
      <HTMLOverlay
        captureDoubleClick
        redraw={
                    () => (
                      <div style={{ backgroundColor: 'red' }}>
                            hello
                      </div>
                    )
                }
      />
    );
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {overlay}
      </ReactMapGL>
    );

    // return (
    //   <ReactMapGL  {...this.state.viewport}
    //   onViewportChange={viewport => this.setState({ viewport })}>
    //     <Marker latitude={37.78} longitude={-122.41}
    //     captureDoubleClick={true}>
    //       <div>You are here</div>
    //     </Marker>
    //   </ReactMapGL>
    // );
  }
}

export default Map;
