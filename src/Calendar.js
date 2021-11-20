import { ClosedDoor } from './components/ClosedDoor'
import './Calendar.css';
import { OpenDoor } from './components/OpenDoor';

function Calendar() {
  return (
    <div className="calendar">
      <ClosedDoor />
      <OpenDoor />
  
    </div>
  );
}

export default Calendar;
