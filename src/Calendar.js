import { ClosedDoor } from './components/ClosedDoor'
import { OpenDoor } from './components/OpenDoor';
import { DoorDetailsModal } from './components/DoorDetailsModal';
import { Door } from './components/Door';
import './Calendar.css';

function Calendar() {
  return (
    <>
    <div className="header">header here</div>
    <div className="calendar">
      <Door />
      {/* <ClosedDoor />
      <OpenDoor /> */}
      {/* <DoorDetailsModal /> */}
    </div>
    </>
  );
}

export default Calendar;
