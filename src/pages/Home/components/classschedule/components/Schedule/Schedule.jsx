import { Link } from "react-router-dom";
import Season from './components/Season/Season'

const Schedule = () => {
  return (
    <div className="flex align-center column">
      <Season
        season={"Fall 2023"}
        months={["Nov", "Dec"]}
        days={["11-12, 18-19", "2-3, 9-10, 16-17"]}
      />
      <Season
        season={"Winter 2024"}
        months={["Jan", "Feb"]}
        days={["7, 20-21, 27-28","7, 20-21, 27-28"]}
      />
      <Link to={"/reservation"} className="schedule-signup-btn">
        Reserve
      </Link>
    </div>
  );
};

export default Schedule
