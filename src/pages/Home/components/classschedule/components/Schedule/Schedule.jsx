import { Link } from "react-router-dom";
import Season from './components/Season/Season'

const Schedule = () => {
  return (
    <div className="flex align-center column">
      <Season
        season={"Fall 2024"}
        months={["August","September","October"]}
        days={["31","1, 14-15, 28-29","12, 19, 26-27"]}
      />
 
      <Link to={"/reservation"} className="schedule-signup-btn">
        Reserve
      </Link>
    </div>
  );
};

export default Schedule
