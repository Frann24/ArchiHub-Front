import { useEffect } from "react";
import { getAllPosts } from "../../redux/slices/post/postActions"
import { getAllReviews } from "../../redux/slices/review/reviewActions";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
  
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ChartPosts () {
    const allPosts = useSelector(state => state.post.allPosts)
    const allReviews = useSelector(state => state.review.allReviews)
    const options = {
      fill: false,              //pinta de color por debajo de las lineas
      responsive: true,
      scales: {
        y: {
          min:0,
          beginAtZero: false,
          ticks: {
            stepSize: 0
        }
        }
      }
    };
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getAllPosts());
      dispatch(getAllReviews())
    },[dispatch])

  

  const score = [allPosts.length, allReviews.length]
  const labels = [`Posts: ${allPosts.length}`, `Reviews: ${allReviews.length}`]

  const data = {
        datasets: [
            {
              label: "Posts",
              data: score,
              // tension: 0.1,
              borderColor: "rgb(75, 192, 192)",
              // pointRadius: 6, #111827
              pointBackgroundColor: "rgb(11, 18, 27)",
              backgroundColor: "rgb(11, 18, 27)",
            }],
        labels,
    }
    return (
        <Bar data={data} options={options}/>
    )
}

export default ChartPosts