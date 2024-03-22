import { Link } from "react-router-dom";
import Season from './components/Season/Season'

const Schedule = () => {
  return (
    <div className="flex align-center column">
      <Season
        season={"Summer 2024"}
        months={["June","July","August"]}
        days={["1-2, 15, 29, 30", "13-14, 27-28","3"]}
      />
 
      <Link to={"/reservation"} className="schedule-signup-btn">
        Reserve
      </Link>
    </div>
  );
};

export default Schedule
