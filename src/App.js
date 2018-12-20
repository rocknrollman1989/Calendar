import React, { Component } from 'react';
import CalendarSelecter from './components/calendarSelect'
import CalendarTabble from './components/calendarTabble'
import dateFns from "date-fns";


class App extends Component {

state = {
todayDate: new Date(),
ourEvents: []

}

componentDidMount = () => {
    const ourActionInfo = []

      for(let i=0; i<localStorage.length; i++){
      let key = localStorage.key(i)
      let returnObj = JSON.parse(localStorage.getItem(key))
      ourActionInfo.push(returnObj)
    }
      this.setState({ ourEvents: ourActionInfo})   
}

prevMonth = () =>{

  this.setState({
    todayDate: dateFns.subMonths(this.state.todayDate, 1)
  })
}

nextMonth = () =>{
  this.setState({
    todayDate: dateFns.addMonths(this.state.todayDate, 1)
  })
}


  render() {
    console.log(this.state.ourEvents)
    return (
    <div className="calendar-wrapper">
      {/* <CalendarHeader/> */}
      <CalendarSelecter dateFns={dateFns} todayState={this.state.todayDate} prevMonth={this.prevMonth} nextMonth={this.nextMonth}/>
      <CalendarTabble dateFns={dateFns} todayState={this.state.todayDate}/>
    </div>
    );
  }
}

export default App;
