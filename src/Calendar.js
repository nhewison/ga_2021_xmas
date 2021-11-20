import { ClosedDoor } from './components/ClosedDoor'
import './Calendar.css';
import { OpenDoor } from './components/OpenDoor';
import { DoorDetailsModal } from './components/DoorDetailsModal';

function Calendar() {
  return (
    <div className="calendar">
      <ClosedDoor />
      <OpenDoor />
      <DoorDetailsModal />
    </div>
  );
}

export default Calendar;
