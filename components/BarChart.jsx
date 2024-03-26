import ReactECharts from 'echarts-for-react';
import sampleData from '../src/sampleData.js';

const BarChart = () => {
  const getBarChartData = () => {
    // Prepare data for bar chart (average Iol values for different IOL formulas)
    const iolData = sampleData.reduce((acc, item) => {
      acc[item['Iol-formula']] = acc[item['Iol-formula']] || { total: 0, count: 0 };
      acc[item['Iol-formula']].total += item.iol_power;
      acc[item['Iol-formula']].count++;
      return acc;
    }, {});

    const averageIolData = Object.keys(iolData).map(key => ({
      name: key,
      value: iolData[key].total / iolData[key].count,
    }));

    return {
      title: {
        text: 'Average IOL Power by IOL Formula',
      },
      xAxis: { type: 'category', data: averageIolData.map(item => item.name), name: 'IOL Formula' },
      yAxis: { type: 'value', name: 'Average IOL Power' },
      tooltip: {
        formatter: (params) => {
          const itemIndex = params.dataIndex;
          const formula = params.marker + params.seriesName + ': ' + params.data.name;
          const power = 'Average IOL Power: ' + params.data.value.toFixed(2);
          return formula + '<br />' + power;
        },
      },
      series: [{ type: 'bar', data: averageIolData.map(item => item.value), name: 'Average IOL Power' }],
    };
  };

  return <ReactECharts option={getBarChartData()} />;
};

export default BarChart;
