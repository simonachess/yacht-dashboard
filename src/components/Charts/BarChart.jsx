// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export const BarChart = ({ chartData }) => (
  <div className="chart-container">
    <Bar
      data={chartData}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: false,
          },
          x: {
            ticks: {
              color: "#000000",
              fontSize: 14,
            },
            grid: {
              display: false,
              drawBorder: false,
            }
          }
        },

      }}
    />
  </div>
);
