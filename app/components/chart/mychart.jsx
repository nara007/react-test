import React from 'react';
// import PropTypes from 'prop-types';
import NVD3Chart from 'react-nvd3';

function getDatum(j) {
  const sin = [];
  const cos = [];

  for (let i = 0; i < 100; i++) {
    sin.push({ x: i, y: Math.sin(i / j) });
    cos.push({ x: i, y: 0.5 * Math.cos(i / j) });
  }

  return [
    {
      values: sin,
      key: 'Sine Wave',
      color: '#ff7f0e',
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c',
    },
  ];
}

const AnalysisChart = props =>
//   const { data, title } = props;
  (
    <NVD3Chart
      id="chart"
      width={500}
      height={500}
      type="lineChart"
      datum={getDatum(10)}
      x="label"
      y="value"
      yAxis={
                { tickFormat(d) { return parseFloat(d).toFixed(2); } }
            }
      xDomain={[-10, 120]}
      duration={1}
    />
  );

// AnalysisChart.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape()),
//   title: PropTypes.string,
// };

// AnalysisChart.defaultProps = {
//   data: [],
//   title: '',
// };

export default AnalysisChart;
