import React, { Component } from 'react';
import CalendarSelecter from './components/calendarSelect'
import CalendarTabble from './components/calendarTabble'
import moment from 'moment'


class App extends Component {

state = {
todayDate: moment()

}

componentDidMount = () => {

}

prevMonth = () =>{

  this.setState({
    todayDate: this.state.todayDate.add(-1, "months")
  })
}

nextMonth = () =>{
  this.setState({
    todayDate: this.state.todayDate.add(1, "months")
  })
}


  render() {

      let weekDays = moment.weekdays();

    return (
    <div className="calendar-wrapper">
      {/* <CalendarHeader/> */}
      <CalendarSelecter props={this.state} prevMonth={this.prevMonth} nextMonth={this.nextMonth}/>
      <CalendarTabble moment={this.state.todayDate} weekDays={weekDays} />
    </div>
    );
  }
}

export default App;
