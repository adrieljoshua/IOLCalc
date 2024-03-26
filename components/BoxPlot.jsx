import ReactECharts from 'echarts-for-react';
import sampleData from '../src/sampleData.js';

const BoxPlot = () => {
  const getBoxPlotOption = () => {
    const boxPlotData = sampleData.map(item => [item.al, item.acd, item.lt, item.k1, item.k2, item.cyl]);

    return {
      title: {
        text: 'Box Plot for Eye Measurements',
      },
      xAxis: { type: 'category', data: ['Axial Length', 'Anterior Chamber Depth', 'Lens Thickness', 'K1', 'K2', 'Cylinder'] },
      yAxis: { type: 'value', name: 'Value' },
      tooltip: {
        formatter: (params) => {
          const itemIndex = params.dataIndex;
          const attribute = params.marker + params.seriesName + ': ' + params.data[itemIndex];
          return attribute;
        },
      },
      series: [{ type: 'boxplot', data: boxPlotData, name: 'Eye Measurements' }],
    };
  };

  return <ReactECharts option={getBoxPlotOption()} />;
};

export default BoxPlot;
