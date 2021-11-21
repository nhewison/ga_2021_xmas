import { ClosedDoor } from './components/ClosedDoor'
import { OpenDoor } from './components/OpenDoor';
import { DoorDetailsModal } from './components/DoorDetailsModal';
import { Door } from './components/Door';
import { doorData } from './doorData';
import './Calendar.css';

function Calendar() {
  return (
    <>
    <div className="header">header here</div>
    <div className="calendar">
      {doorData.map(person => <Door data={person} />)}
    </div>
    </>
  );
}

export default Calendar;
