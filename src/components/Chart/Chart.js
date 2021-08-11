import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    let valueArray = props.datapoints.map(dataPoint => dataPoint.value);

    const max = Math.max(...valueArray);

    return (
        <div className="chart">
            {props.datapoints.map((dataPoint, index)=> <ChartBar key={dataPoint.label} value={dataPoint.value} max={max} label={dataPoint.label} />)}
        </div>
    );
};

export default Chart;
