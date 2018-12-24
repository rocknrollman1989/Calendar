import React, { Component } from 'react';
import CalendarSelecter from './components/calendarSelect'
import CalendarTabble from './components/calendarTabble'
import dateFns from "date-fns";
import CalendarHeader from './components/calendarHeader'
import { connect } from 'react-redux'
import { loadEventToFirebase } from './actions/actions'


class App extends Component {

state = {
todayDate: new Date(),
searchEvent: '',
ourSearchEventsDisplay: []

}

componentDidMount = () => {
  // забираем эвенты из локала
      const ourActionInfo = []
      for(let i=0; i<localStorage.length; i++){
      let key = localStorage.key(i)
      let returnObj = JSON.parse(localStorage.getItem(key))
      ourActionInfo.push(returnObj)
    }

      this.props.loadEventToFirebase(ourActionInfo) // обновляем стэйт при загрузке + обновляем фаерстор
    
}

searchEvents = (e) => {
  const { value, name } = e.target
  this.setState({ [name]: value })

  const { events } = this.props
  const { searchEvent } = this.state
  let textToFind = searchEvent
  const ourSearchEvents = []
  const regExpToFind = new RegExp(textToFind.replace(/[.{}()[\]?*+^$]/, '\\\\$1'), 'gmi')
    events.filter((item) => {
        return Object.keys(item).some((key) => {
            if(regExpToFind.test(item[key])){
               return ourSearchEvents.push(item)
              }
            return false
           })     
      })
   
  return this.setState({ ourSearchEventsDisplay:  ourSearchEvents})
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

// clearLocalStorage = () => {
//   localStorage.clear()
// }

  render() {

    return (
    <div className="calendar-wrapper">
      <CalendarHeader clearLocalStorage={this.clearLocalStorage} searchEvents={this.searchEvents} searchEvent={this.state.searchEvent} ourSearchEventsDisplay={this.state.ourSearchEventsDisplay}/>
      <CalendarSelecter dateFns={dateFns} todayState={this.state.todayDate} prevMonth={this.prevMonth} nextMonth={this.nextMonth}/>
      <CalendarTabble dateFns={dateFns} todayState={this.state.todayDate}/>
    </div>
    );
  }
}

const mapStateToProps = (state) =>{

  return{
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {

  return{
    loadEventToFirebase: (eventsArray) => {dispatch(loadEventToFirebase(eventsArray))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
