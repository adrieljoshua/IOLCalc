import ReactECharts from 'echarts-for-react';

// eslint-disable-next-line react/prop-types
const RadarChart = ({ data, selectedRowIndex }) => {
  const selectedRow = data[selectedRowIndex];
  const attributes = Object.keys(selectedRow).filter(attr => attr !== 'Iol-formula' && attr !== 'cyl');

  const radarData = attributes.map(attr => ({
    name: attr,
    value: selectedRow[attr],
  }));

  const options = {
    title: {
      text: 'Radar Chart for Selected Row vs. Sample Data',
    },
    tooltip: {},
    legend: {
      data: ['Selected Row', 'Average Sample Data'],
    },
    radar: {
      // eslint-disable-next-line react/prop-types
      indicator: attributes.map(attr => ({ name: attr, max: Math.max(...data.map(item => item[attr])) })),
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: radarData.map(item => item.value),
          name: 'Selected Row',
        },
        {
          // eslint-disable-next-line react/prop-types
          value: attributes.map(attr => data.reduce((acc, item) => acc + item[attr], 0) / data.length),
          name: 'Average Sample Data',
        },
      ],
    }],
  };

  return <ReactECharts option={options} />;
};

export default RadarChart;
