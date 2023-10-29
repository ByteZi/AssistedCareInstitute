import "./ClassSchedule.css";
import Price from "../../../../components/Price/Price";
import Schedule from './components/Schedule/Schedule'

const ClassSchedule = () => {
  // make this updatable by admin
  return (
    <div className="schedule-con column flex align-center">
      <h2 className="schedule-header">Upcoming Weekend Classes</h2>
      <p className="schedule-desc">
        Classes consists of ten (10) days. Total of 80 hours each season 
      </p>

      <div className="flex space-between wrap align-center just-center">
        <Price />
        <Schedule/>
      </div>

    </div>
  );
};

export default ClassSchedule;
