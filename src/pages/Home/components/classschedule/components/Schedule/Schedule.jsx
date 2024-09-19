import { Link } from "react-router-dom";
import Season from './components/Season/Season'

const Schedule = () => {
  return (
    <div className="flex align-center column">
      <Season
        season={"Fall 2024"}
        months={["November"]}
        days={["14-17, 21-24"]}
      />
 
      <Link to={"/reservation"} className="schedule-signup-btn">
        Reserve
      </Link>
    </div>
  );
};

export default Schedule
