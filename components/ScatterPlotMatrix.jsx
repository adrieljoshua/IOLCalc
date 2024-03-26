import ReactECharts from 'echarts-for-react';
import sampleData from '../src/sampleData.js';

const ScatterPlotMatrix = () => {
  const getScatterPlotMatrixData = () => {
    // Prepare data for scatter plot matrix
    // You may need to customize this based on your data structure
    const data = sampleData.map(item => [item.al, item.acd, item.lt, item.k1, item.k2, item.cyl]);

    const attributes = ['Axial Length', 'Anterior Chamber Depth', 'Lens Thickness', 'K1', 'K2', 'Cylinder'];

    return {
      title: {
        text: 'Scatter Plot Matrix for IOL Attributes',
      },
      tooltip: {
        position: 'top',
        formatter: params => {
          const [xIndex, yIndex] = params.dataIndex;
          return `Attribute: ${attributes[xIndex]} vs ${attributes[yIndex]}<br/>Value: ${params.value}`;
        },
      },
      xAxis: [
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
      ],
      yAxis: [
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
        { type: 'value', scale: true },
      ],
      series: [
        { type: 'scatter', data: data, name: 'Axial Length' },
        { type: 'scatter', data: data, name: 'Anterior Chamber Depth' },
        { type: 'scatter', data: data, name: 'Lens Thickness' },
        { type: 'scatter', data: data, name: 'K1' },
        { type: 'scatter', data: data, name: 'K2' },
        { type: 'scatter', data: data, name: 'Cylinder' },
      ],
    };
  };

  return <ReactECharts option={getScatterPlotMatrixData()} />;
};

export default ScatterPlotMatrix;
