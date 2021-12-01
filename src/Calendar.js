import { Door } from './components/Door';
import { doorData } from './doorData';
import './Calendar.css';

function Calendar() {
  return (
    <>
    <div className="header"> 
      <img alt='ga-logo' src='https://i.imgur.com/4fSEBUq.png'></img>
      <p>UK Team Advent Calendar 2021 </p>
    </div>
    <div className="calendar">
      {doorData.map(person => <Door data={person} />)}
    </div>
    </>
  );
}

export default Calendar;
