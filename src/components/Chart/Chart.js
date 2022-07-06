import './Chart.css';
import React from 'react';
import ChartBar from './ChartBar'
const Chart = props => {
    const dataPointvalues = props.dataPoint.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointvalues);
    return <div className='chart'>
        {props.dataPoint.map(dataPoint => <ChartBar
         key={dataPoint.label} 
         value={dataPoint.value}
          maxvalue={totalMaximum}
        label={dataPoint.label} />)}
    </div>

}

export default Chart;