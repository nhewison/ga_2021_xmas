import { Door } from './components/Door';
import { doorData } from './doorData';
import './Calendar.css';

function Calendar() {
  return (
    <>
    <div className="header"> GA UK Team Advent Calendar 2021 </div>
    <div className="calendar">
      {doorData.map(person => <Door data={person} />)}
    </div>
    </>
  );
}

export default Calendar;
