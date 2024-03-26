import './App.css'
import IOLCalcButton from '../components/IOLCalcButton';
import RadarChart from '../components/RadarChart.jsx'
import sampleData from '../src/sampleData.js'
import BarChart from '../components/BarChart.jsx' 
import ScatterPlotMatrix from '../components/ScatterPlotMatrix.jsx';
import LineChart from '../components/LineChart.jsx';
import BoxPlot from '../components/BoxPlot.jsx';


function App() {
  return (
    <>
     <IOLCalcButton data={sampleData}/>
      <RadarChart data={sampleData} selectedRowIndex={0} />
      <BarChart />
      <BoxPlot />
      <LineChart />
      <ScatterPlotMatrix />

    </>
  )
}


export default App
