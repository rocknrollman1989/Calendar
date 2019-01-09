import React, { Component } from 'react';
import CalendarSelecter from './components/calendarSelect';
import CalendarTabble from './components/calendarTabble';
import dateFns from 'date-fns';
import CalendarHeader from './components/calendarHeader';
import { connect } from 'react-redux';
import { searchOurEvents } from './helpers/validateForm';
import { loadEventToFirebase, addQuickEventToCAlendar, clearFirestoreStore } from './actions/actions';


class App extends Component {

state = {
todayDate: new Date(),
shortEventDescr: '',
ourSearchEventsDisplay: []

}

componentDidMount = () => {
  // забираем эвенты из локала
      const ourActionInfo = [];
      for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let returnObj = JSON.parse(localStorage.getItem(key));
      ourActionInfo.push(returnObj);
    }
      this.props.loadEventToFirebase(ourActionInfo); // обновляем стэйт при загрузке + обновляем фаерстор
}
addingANewEvent = (e) =>{
  const { value, name } = e.target;
  this.setState({[name]: value });
}

addAEventToCAlendar = () => {
  this.setState({shortEventDescr: this.state.shortEventDescr});

  this.props.addQuickEventToCAlendar(this.state.shortEventDescr);

  return  this.setState({shortEventDescr: ''});
}

searchEvents = (e) => {
  const { value, name } = e.target;
  this.setState({ [name]: value },
    () => {
      const { events } = this.props;
      this.setState({ ourSearchEventsDisplay: searchOurEvents(value, events)});
    }
  );

 return false;
}

prevMonth = () =>{
  this.setState({
    todayDate: dateFns.subMonths(this.state.todayDate, 1)
  });
}

nextMonth = () =>{
  this.setState({
    todayDate: dateFns.addMonths(this.state.todayDate, 1)
  });
}

clearLocalStorage = () => {
  const ourClearStorageInfoKeys = [];
      for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      //find keys to clear fb
      let returnObj = JSON.parse(localStorage.getItem(key));
      ourClearStorageInfoKeys.push(returnObj.keyDateForUser);
      }
  this.props.clearFirestoreStore(ourClearStorageInfoKeys);

    localStorage.clear();
}

  render() {

    return (
    <div className="calendar-wrapper">
      <CalendarHeader props={this.state} clearLocalStorage={this.clearLocalStorage} searchEvents={this.searchEvents} addingANewEvent={this.addingANewEvent} addAEventToCAlendar={this.addAEventToCAlendar}/>
      <CalendarSelecter dateFns={dateFns} todayState={this.state.todayDate} prevMonth={this.prevMonth} nextMonth={this.nextMonth}/>
      <CalendarTabble dateFns={dateFns} todayState={this.state.todayDate}/>
    </div>
    );
  }
}

const mapStateToProps = (state) =>{

  return {
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    loadEventToFirebase: (eventsArray) => {dispatch(loadEventToFirebase(eventsArray));},
    addQuickEventToCAlendar: (addEventData) => {dispatch(addQuickEventToCAlendar(addEventData));},
    clearFirestoreStore: (ourClearStorageInfoKeys) => {dispatch(clearFirestoreStore(ourClearStorageInfoKeys));}
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
