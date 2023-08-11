import { Line } from 'react-chartjs-2';
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);



export const LineChart = (props) => {
  const data = {
    labels: Object.keys(props.gdata["Time Series (1min)"]).reverse(),
    datasets: [
      {
        data: Object.values(props.gdata["Time Series (1min)"]).map(item => item["4. close"]).reverse(),
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        pointBorderColor: 'transparent',
        pointBorderWidth: 0,
      }
    ]
  };
  
  const options = {
  
  };

  return (
    <div>
    <Line data={data} options={options}/>
  </div>
  )
}