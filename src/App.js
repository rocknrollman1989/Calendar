import React, { Component } from 'react';
import CalendarSelecter from './components/calendarSelect'
import CalendarTabble from './components/calendarTabble'




class App extends Component {

state = {


}

componentDidMount = () => {

}

getDaysInMonts = () => {

}


  render() {
    
    return (
    <div className="calendar-wrapper">
      {/* <CalendarHeader/> */}
      <CalendarSelecter />
      <CalendarTabble />
    </div>
    );
  }
}

export default App;
