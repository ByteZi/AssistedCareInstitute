import { Link } from "react-router-dom";
import Season from "./components/Season/Season";

const Schedule = () => {
  return (
    <div className="flex align-center column">
      <Season
        season={"Spring 2025"}
        months={["June","July"]}
        days={["7-8, 21-22","5-6, 19-20, 26"]}
      />

      <Link to={"/reservation"} className="schedule-signup-btn">
        Reserve
      </Link>
    </div>
  );
};

export default Schedule;
