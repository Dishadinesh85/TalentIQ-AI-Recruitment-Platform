import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function InterviewScoreChart() {

  const data = {
    labels: ["Round 1", "Round 2", "Round 3"],
    datasets: [
      {
        label: "Technical Score",
        data: [60, 75, 85],
        borderColor: "blue",
        tension: 0.4
      },
      {
        label: "HR Score",
        data: [70, 80, 90],
        borderColor: "green",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="card">
      <h3>Interview Performance</h3>
      <Line data={data} />
    </div>
  );
}