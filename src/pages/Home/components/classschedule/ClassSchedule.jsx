import "./ClassSchedule.css";
import Price from "../../../../components/Price/Price";
import Schedule from "./components/Schedule/Schedule";

const ClassSchedule = () => {
  // make this updatable by admin
  return (
    <div className="schedule-con column flex align-center">
      <h2 className="schedule-header">Upcoming Weekend Classes</h2>
      <div className="schedule-desc">
        <p>
          Classes are seasonal and consists of ten (10) days. Total of 80 hours
        </p>
        {/* <div style={{ color: "red" }}>
          
        </div> */}
      </div>
      <p></p>

      <div className="flex space-between wrap align-center just-center">
        <Price />
        <Schedule />
      </div>
    </div>
  );
};

export default ClassSchedule;
