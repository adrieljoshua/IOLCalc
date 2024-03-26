import ReactECharts from 'echarts-for-react';
import sampleData from '../src/sampleData.js';

const LineChart = () => {
  const getLineChartData = () => {
    // Prepare data for line chart (Iol values over time or stages)
    const timeData = sampleData.map((item, index) => ({ name: `Sample ${index + 1}`, value: item.iol_power }));

    return {
      title: {
        text: 'IOL Power Variation Over Samples',
      },
      xAxis: { type: 'category', data: timeData.map(item => item.name), name: 'Samples' },
      yAxis: { type: 'value', name: 'IOL Power (D)' },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c} D',
      },
      series: [{ type: 'line', data: timeData.map(item => item.value), name: 'IOL Power', smooth: true }],
    };
  };

  return <ReactECharts option={getLineChartData()} />;
};

export default LineChart;
