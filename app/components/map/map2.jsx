import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import Place from '@material-ui/icons/Place';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 53.88429731256707,
        longitude: 9.095051207329808,
        zoom: 15,
      },
    };
  }


  render() {
    // const { containerWidth, containerHeight } = this.props;
    const viewport = {
      ...this.state.viewport,
      width: 600,
      height: 600,
    };
    const data = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [
                  10.12939453125,
                  55.81362907119958,
                ],
                [
                  9.55810546875,
                  55.05320258537112,
                ],
                [
                  9.7119140625,
                  54.73730756865752,
                ],
                [
                  10.21728515625,
                  54.457266680933856,
                ],
                [
                  10.87646484375,
                  53.99485396562768,
                ],
                [
                  12.63427734375,
                  53.592504809039376,
                ],
                [
                  16.5673828125,
                  53.86548550842127,
                ],
                [
                  20.41259765625,
                  54.226707764386695,
                ],
                [
                  23.37890625,
                  55.10351605801967,
                ],
                [
                  22.785644531249996,
                  57.219608462466475,
                ],
                [
                  24.19189453125,
                  56.74067435475299,
                ],
                [
                  24.67529296875,
                  57.00485033534416,
                ],
                [
                  24.49951171875,
                  57.79794388498275,
                ],
                [
                  24.89501953125,
                  58.55106062287748,
                ],
                [
                  26.60888671875,
                  58.69977573144006,
                ],
                [
                  28.125,
                  59.52317553544798,
                ],
                [
                  30.30029296875,
                  59.74532608213611,
                ],
                [
                  34.8486328125,
                  59.7563950493563,
                ],
                [
                  32.2119140625,
                  62.59334083012024,
                ],
                [
                  23.44482421875,
                  60.951776809566965,
                ],
                [
                  23.0712890625,
                  63.04500101542009,
                ],
                [
                  26.015625,
                  64.67091929440798,
                ],
                [
                  27.773437499999996,
                  65.50385357555169,
                ],
                [
                  26.47705078125,
                  66.44310650816469,
                ],
                [
                  23.22509765625,
                  66.73990169639414,
                ],
                [
                  20.7421875,
                  66.16938981887661,
                ],
                [
                  19.84130859375,
                  64.94216049820734,
                ],
                [
                  16.962890625,
                  63.174193604205094,
                ],
                [
                  15.44677734375,
                  61.090168316050516,
                ],
                [
                  15.44677734375,
                  59.567723306212955,
                ],
                [
                  14.78759765625,
                  57.97315745102812,
                ],
                [
                  13.02978515625,
                  57.028773851491124,
                ],
                [
                  10.12939453125,
                  55.81362907119958,
                ],
              ],
            ],
          },
        },
      ],
    };

    const data3 = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {
          name: 'BREB COURAGEOUS', imo: 9421178, height: 12, mmsi: 255806042, type: 'General Cargo', lineColor: '#1A7BE3', fillColor: '#1A7BE3', heading: 85,
        },
        geometry: { type: 'Polygon', coordinates: [[[9.095051207329808, 53.88429731256707], [9.094901740513734, 53.88419034306371], [9.093424943366317, 53.88411418845856], [9.09339569992053, 53.88431120417429], [9.094872497008605, 53.884387358820305], [9.095051207329808, 53.88429731256707]]] },
      }, {
        type: 'Feature',
        properties: {
          name: 'BREB COURAGEOUS', imo: 9421178, height: 17, mmsi: 255806042, type: 'General Cargo', lineColor: '#234B75', fillColor: '#234B75', heading: 85,
        },
        geometry: { type: 'Polygon', coordinates: [[[9.094263052256013, 53.88434690750692], [9.094289637301799, 53.884167802245315], [9.094198477197699, 53.88416310134362], [9.094171892282112, 53.884342206515534]]] },
      }],
    };


    const data4 = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [9.095051207329808, 53.88429731256707], [9.094901740513734, 53.88419034306371], [9.093424943366317, 53.88411418845856], [9.09339569992053, 53.88431120417429], [9.094872497008605, 53.884387358820305], [9.095051207329808, 53.88429731256707],
              ],
            ],
          },
        },
      ],
    };

    const layer = new GeoJsonLayer({
      id: 'events-feed',
      data: data3,
      // data,
      pickable: true,
      stroked: true,
      filled: true,
      extruded: true,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [160, 160, 180, 200],
      //   getLineColor: d => colorToRGBArray(d.properties.color),
      getRadius: 100,
      getLineWidth: 1,
      getElevation: 30,
      // onHover: ({ object }) => setTooltip(object.properties.name || object.properties.station)
    });
    // const layer = new GeoJsonLayer({
    //   id: 'geojson-layer2',
    //   data: data2,
    //   pickable: true,
    //   stroked: false,
    //   filled: true,
    //   extruded: true,
    //   lineWidthScale: 20,
    //   lineWidthMinPixels: 2,
    //   getFillColor: [160, 160, 180, 200],
    //   // getLineColor: d => [12, 12, 12, 200],
    //   getRadius: 100,
    //   getLineWidth: 1,
    //   getElevation: 30,
    //   // onHover: ({object}) => setTooltip(object.properties.name || object.properties.station)
    // });

    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={newviewport => this.setState({ viewport: newviewport })}
      >
        {/* <VesselLayer viewport={viewport} data={data} /> */}
        <DeckGL {...viewport} layers={[layer]} />
        <Marker
          longitude={9.095051207329808}
          latitude={53.88429731256707}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Place style={{ color: '#fe3446' }} />
        </Marker>
      </ReactMapGL>
    );
  }
}
export default Map;
// export default Dimensions()(Map);
