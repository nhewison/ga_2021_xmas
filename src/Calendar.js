import { Door } from './components/Door';
import { doorData } from './doorData';
import './Calendar.css';

function Calendar() {

  const ga = `
  _____          
 / ____|   /\\    
| |  __   /  \\   
| | |_ | / /\\ \\  
| |__| |/ ____ \\ 
 \\_____/_/    \\_\\ 

 made by NH 2021.
  `
  console.log(ga)

  return (
    <>
    <div className="header"> 
      <img alt='ga-logo' src='https://i.imgur.com/4fSEBUq.png'></img>
      <p>UK Team Advent Calendar 2021 </p>
    </div>
    <div className="calendar">
      {doorData.map((person, index) => <Door key={index} data={person} />)}
    </div>
    <div className="footer">
      <a href="https://github.com/nhewison/"> made by NH 2021. </a>
    </div>

    </>
  );
}

export default Calendar;
